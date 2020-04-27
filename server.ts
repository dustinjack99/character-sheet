import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { Messenger } from "./backend/messenger";
import { makeApiRouter } from "./backend/apiRoutes";

const FRONTEND_PATH = "../frontend/build";

async function main() {
  // Config

  dotenv.config();

  const port = process.env.PORT || 5000;

  // Middleware

  const app = express();

  app.use(bodyParser.json());

  // Discord

  const token = process.env.DISCORD_TOKEN;
  if (!token) {
    throw new Error("DISCORD_TOKEN not set");
  }
  const channelId = process.env.CHANNEL_ID;
  if (!channelId) {
    throw new Error("CHANNEL_ID not set");
  }

  const messenger = await Messenger.init({ token });

  // Routing

  const apiRouter = makeApiRouter(messenger, channelId);
  app.use("/api", apiRouter);

  app.use(express.static(path.join(__dirname, FRONTEND_PATH)));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });

  // Launch

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

main();

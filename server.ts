import bodyParser from "body-parser";
import { Client, Message } from "discord.js";
import dotenv from "dotenv";
import express from "express";
import path from "path";

// Config

dotenv.config();

const FRONTEND_PATH = "../frontend/build";

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

const discord = new Client();

discord.once("ready", () => {
  console.log("discord client ready");
});

discord.on("message", (msg: Message) => {
  console.log("Got discord message:", msg.content);
});

discord.login(token);

// Api routing

app.post("/api/example", (req, res) => {
  console.log("request body:");
  console.dir(req.body);

  return res.sendStatus(200);
});

app.get("/api/*", (_req, res) => {
  return res.sendStatus(404);
});

// Frontend routing

app.use(express.static(path.join(__dirname, FRONTEND_PATH)));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Launch

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

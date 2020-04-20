import express from "express";
import path from "path";
import bodyParser from "body-parser";

const FRONTEND_PATH = "../frontend/build";

const port = process.env.PORT || 5000;

// Middleware

const app = express();
app.use(bodyParser.json());

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

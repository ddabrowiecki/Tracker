import getTrackerValues from "./sheetConsumer.js";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
app.use(cors());

app.get("/", async (req, res) => {
  const values = await getTrackerValues();
  return res.send({ data: values });
});

app.listen(port, host, () => {
  console.log(`App is running on: ${host}:${port}`);
});

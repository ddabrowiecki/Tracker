import getTrackerValues from "./sheetConsumer.js";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const app = express();
const port = 5000;
app.use(cors());

app.get("/", async (req, res) => {
  const values = await getTrackerValues();
  return res.send({ data: values, finData: JSON.parse(process.env.FIN_INFO) });
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});

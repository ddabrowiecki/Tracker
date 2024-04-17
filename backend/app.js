import getTrackerValues from "./sheetConsumer.js"
import cors from "cors"
import express from "express"

const app = express();
const port = 5000;
app.use(cors());

app.get("/", async (req, res) => {
  const values = await getTrackerValues()
  return res.send(values);
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});

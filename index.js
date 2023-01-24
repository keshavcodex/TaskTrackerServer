import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);

const mongourl = process.env.MONGO_URL;
Connection(mongourl);
app.listen(port || process.env.PORT, () =>
  console.log(`Server is running on PORT ${port}`)
);

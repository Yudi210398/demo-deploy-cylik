import express from "express";
import mongoose from "mongoose";
import routerAdmin from "./router/adminRouter.js";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use(routerAdmin);

connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests", `konek`);
  });
});

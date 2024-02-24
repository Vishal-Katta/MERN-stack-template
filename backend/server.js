import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import colors from "colors";

import router from "./router.js";

const app = express();
dotenv.config();

// // this is our MongoDB database
// try {
//   const conn = await mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   });
//   console.log(`Connected to MongoDB ${conn.connection.host}`.blue);
// } catch (error) {
//   // console.log(`Error in MongoDB Connection: ${error}`.red);
//   console.log(`Error in MongoDB Connection`.red);
// }

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
}

// rest api
app.get("/", (req, res) => {
  res.send("Api route checking");
});
app.use("/api/v1", cors(), router);

const PORT = process.env.PORT || 3000;

// Start the API server
app.listen(PORT, () => {
  console.log(`Server is listening at: ${PORT} => http://localhost:${PORT}`);
});

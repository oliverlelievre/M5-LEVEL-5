import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./src/routes/auth.js";
import usersRoute from "./src/routes/users.js";
import applicationsRoute from "./src/routes/applications.js";
import propertiesRoute from "./src/routes/properties.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

// CORS middleware
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

//connect to db
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to MongoDB & server is running on port",
        process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.log("Error connecting to db", err);
  });

//middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/applications", applicationsRoute);
app.use("/api/properties", propertiesRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
// app.listen(8800, () => {
//   console.log("Backend server is running!");
// });

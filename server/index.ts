import express, { ErrorRequestHandler } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import applicationsRoute from "./src/routes/applications.js";
import propertiesRoute from "./src/routes/properties.js";
import cors from "cors";

dotenv.config();

const app = express();

// CORS middleware
app.use(cors());

// Connect to the database
mongoose
  .connect(process.env.MONGO || "")
  .then(() => {
    // Listen for requests
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

// Middleware
app.use(express.json());

// Routes
app.use("/api/applications", applicationsRoute);
app.use("/api/properties", propertiesRoute);

// Error handler middleware
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
};

app.use(errorHandler);

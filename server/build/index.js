"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const applications_js_1 = __importDefault(require("./src/routes/applications.js"));
const properties_js_1 = __importDefault(require("./src/routes/properties.js"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// CORS middleware
app.use((0, cors_1.default)());
// Connect to the database
mongoose_1.default
    .connect(process.env.MONGO || "")
    .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
        console.log("Connected to MongoDB & server is running on port", process.env.PORT);
    });
})
    .catch((err) => {
    console.log("Error connecting to db", err);
});
// Middleware
app.use(express_1.default.json());
// Routes
app.use("/api/applications", applications_js_1.default);
app.use("/api/properties", properties_js_1.default);
// Error handler middleware
const errorHandler = (err, req, res, next) => {
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

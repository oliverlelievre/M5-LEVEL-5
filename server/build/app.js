"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const applications_1 = __importDefault(require("./src/routes/applications"));
const properties_1 = __importDefault(require("./src/routes/properties"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// CORS middleware
app.use((0, cors_1.default)());
// Connect to the database
mongoose_1.default
    .connect(process.env.MONGO || "")
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.log("Error connecting to db", err);
});
// Middleware
app.use(express_1.default.json());
// Routes
app.use("/api/applications", applications_1.default);
app.use("/api/properties", properties_1.default);
exports.default = app;

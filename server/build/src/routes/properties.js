"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const propertyController_1 = require("../controllers/propertyController");
const router = express_1.default.Router();
// CREATE
router.post("/", propertyController_1.createProperty);
// UPDATE
router.put("/:id", propertyController_1.updateProperty);
// DELETE
router.delete("/:id", propertyController_1.deleteProperty);
// GET
router.get("/find/:id", propertyController_1.getProperty);
// GET ALL
router.get("/", propertyController_1.getAllProperty);
router.get("/countByCity", propertyController_1.countByCity);
router.get("/countByType", propertyController_1.countByType);
exports.default = router;

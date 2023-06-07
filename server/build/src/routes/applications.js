"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applicationController_1 = require("../controllers/applicationController");
const router = express_1.default.Router();
// CREATE
router.post("/:propertyid", applicationController_1.createApplication);
// UPDATE
router.put("/:id", applicationController_1.updateApplication);
// DELETE
router.delete("/:id/:propertyid", applicationController_1.deleteApplication);
// GET
router.get("/:id", applicationController_1.getApplication);
// GET ALL
router.get("/", applicationController_1.getAllApplications);
exports.default = router;

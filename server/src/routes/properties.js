import express from "express";
import {
  createProperty,
  updateProperty,
  deleteProperty,
  getProperty,
  getAllProperty,
  countByCity,
  countByType,
} from "../controllers/propertyController.js";
import Property from "../models/Property.js";

const router = express.Router();

//CREATE
router.post("/", createProperty);

//UPDATE
router.put("/:id", updateProperty);

//DELETE
router.delete("/:id", deleteProperty);

//GET
router.get("/find/:id", getProperty);

//GET ALL
router.get("/", getAllProperty);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;

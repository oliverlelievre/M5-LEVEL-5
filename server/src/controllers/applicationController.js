import Application from "../models/Application.js";
import Property from "../models/Property.js";
import { createError } from "../utils/error.js";

export const createApplication = async (req, res, next) => {
  const propertyId = req.body.propertyid;
  const newApplication = new Application(req.body);

  try {
    const savedApplication = await newApplication.save();
    try {
      await Property.findByIdAndUpdate(propertyId, {
        $push: { applications: savedApplication._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).send(savedApplication);
  } catch (error) {
    next(error);
  }
};

export const updateApplication = async (req, res, next) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedApplication);
  } catch (error) {
    next(error);
  }
};

export const deleteApplication = async (req, res, next) => {
  const propertyId = req.body.propertyid;
  try {
    await Application.findByIdAndDelete(req.params.id);
    try {
      await Property.findByIdAndUpdate(propertyId, {
        $pull: { applications: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Application has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getApplication = async (req, res, next) => {
  try {
    const application = await Application.findById(req.params.id);
    res.status(200).json(application);
  } catch (error) {
    next(error);
  }
};

export const getAllApplications = async (req, res, next) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    next(error);
  }
};


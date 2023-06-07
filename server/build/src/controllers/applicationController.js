"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllApplications = exports.getApplication = exports.deleteApplication = exports.updateApplication = exports.createApplication = void 0;
const Application_1 = __importDefault(require("../models/Application"));
const Property_1 = __importDefault(require("../models/Property"));
const createApplication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const propertyId = req.body.propertyid;
    const newApplication = new Application_1.default(req.body);
    try {
        const savedApplication = yield newApplication.save();
        try {
            yield Property_1.default.findByIdAndUpdate(propertyId, {
                $push: { applications: savedApplication._id },
            });
        }
        catch (error) {
            next(error);
        }
        res.status(200).send(savedApplication);
    }
    catch (error) {
        next(error);
    }
});
exports.createApplication = createApplication;
const updateApplication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedApplication = yield Application_1.default.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedApplication);
    }
    catch (error) {
        next(error);
    }
});
exports.updateApplication = updateApplication;
const deleteApplication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const propertyId = req.body.propertyid;
    try {
        yield Application_1.default.findByIdAndDelete(req.params.id);
        try {
            yield Property_1.default.findByIdAndUpdate(propertyId, {
                $pull: { applications: req.params.id },
            });
        }
        catch (error) {
            next(error);
        }
        res.status(200).json("Application has been deleted.");
    }
    catch (error) {
        next(error);
    }
});
exports.deleteApplication = deleteApplication;
const getApplication = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const application = yield Application_1.default.findById(req.params.id);
        res.status(200).json(application);
    }
    catch (error) {
        next(error);
    }
});
exports.getApplication = getApplication;
const getAllApplications = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const applications = yield Application_1.default.find();
        res.status(200).json(applications);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllApplications = getAllApplications;

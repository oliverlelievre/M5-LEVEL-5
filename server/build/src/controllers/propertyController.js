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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countByType = exports.countByCity = exports.getAllProperty = exports.getProperty = exports.deleteProperty = exports.updateProperty = exports.createProperty = void 0;
const Property_1 = __importDefault(require("../models/Property"));
const createProperty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newProperty = new Property_1.default(req.body);
    try {
        const savedProperty = yield newProperty.save();
        res.status(200).json(savedProperty);
    }
    catch (error) {
        next(error);
    }
});
exports.createProperty = createProperty;
const updateProperty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProperty = yield Property_1.default.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedProperty);
    }
    catch (error) {
        next(error);
    }
});
exports.updateProperty = updateProperty;
const deleteProperty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Property_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json("Property has been deleted.");
    }
    catch (error) {
        next(error);
    }
});
exports.deleteProperty = deleteProperty;
const getProperty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const property = yield Property_1.default.findById(req.params.id);
        res.status(200).json(property);
    }
    catch (error) {
        next(error);
    }
});
exports.getProperty = getProperty;
const getAllProperty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.query, { min, max, limit } = _a, others = __rest(_a, ["min", "max", "limit"]);
    try {
        let query = Property_1.default.find(Object.assign({}, others));
        if (min) {
            query = query.where("roomPrice").gt(Number(min));
        }
        if (max) {
            query = query.where("roomPrice").lt(Number(max));
        }
        if (limit) {
            query = query.limit(Number(limit));
        }
        const properties = yield query.exec();
        res.status(200).json(properties);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllProperty = getAllProperty;
const countByCity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cities = req.query.cities.split(",");
    try {
        const list = yield Promise.all(cities.map((city) => Property_1.default.countDocuments({ city })));
        res.status(200).json(list);
    }
    catch (error) {
        next(error);
    }
});
exports.countByCity = countByCity;
const countByType = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const propertyCount = yield Property_1.default.countDocuments({ type: "property" });
        const bungalowCount = yield Property_1.default.countDocuments({ type: "bungalow" });
        const apartmentCount = yield Property_1.default.countDocuments({ type: "apartment" });
        const townhouseCount = yield Property_1.default.countDocuments({ type: "townhouse" });
        const cottageCount = yield Property_1.default.countDocuments({ type: "cottage" });
        const victorianHouseCount = yield Property_1.default.countDocuments({
            type: "victorian-house",
        });
        const ranchStyleHouseCount = yield Property_1.default.countDocuments({
            type: "ranch-style-house",
        });
        res.status(200).json([
            { type: "property", count: propertyCount },
            { type: "bungalow", count: bungalowCount },
            { type: "apartment", count: apartmentCount },
            { type: "townhouse", count: townhouseCount },
            { type: "cottage", count: cottageCount },
            { type: "victorian-house", count: victorianHouseCount },
            { type: "ranch-style-house", count: ranchStyleHouseCount },
        ]);
    }
    catch (error) {
        next(error);
    }
});
exports.countByType = countByType;

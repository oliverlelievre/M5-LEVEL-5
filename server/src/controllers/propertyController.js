import Property from "../models/Property.js";

export const createProperty = async (req, res, next) => {
  const newProperty = new Property(req.body);

  try {
    const savedProperty = await newProperty.save();
    res.status(200).json(savedProperty);
  } catch (error) {
    next(error);
  }
};

export const updateProperty = async (req, res, next) => {
  try {
    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProperty);
  } catch (error) {
    next(error);
  }
};

export const deleteProperty = async (req, res, next) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.status(200).json("Property has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id);
    res.status(200).json(property);
  } catch (error) {
    next(error);
  }
};

export const getAllProperty = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query;
  try {
    let query = Property.find({ ...others });
    if (min) {
      query = query.where("roomPrice").gt(min);
    }
    if (max) {
      query = query.where("roomPrice").lt(max);
    }
    if (limit) {
      query = query.limit(parseInt(limit));
    }
    const properties = await query.exec();
    res.status(200).json(properties);
  } catch (error) {
    next(error);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Property.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const propertyCount = await Property.countDocuments({ type: "property" });
    const bungalowCount = await Property.countDocuments({ type: "bungalow" });
    const apartmentCount = await Property.countDocuments({ type: "apartment" });
    const townhouseCount = await Property.countDocuments({ type: "townhouse" });
    const cottageCount = await Property.countDocuments({ type: "cottage" });
    const victorianHouseCount = await Property.countDocuments({
      type: "victorian-house",
    });
    const ranchStyleHouseCount = await Property.countDocuments({
      type: "ranch-style-house",
    });

    res.status(200).json([
      { type: "property", count: propertyCount },
      { type: "bungalow", count: bungalowCount },
      { type: "apartment", count: apartmentCount },
      { type: "townhouse", count: townhouseCount },
      { type: "cottage", count: cottageCount },
      { type: "victorian-house", count: victorianHouseCount },
    ]);
  } catch (error) {
    next(error);
  }
};

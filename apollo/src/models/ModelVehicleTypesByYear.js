import mongoose from "mongoose";


const SchemaVehicleTypesByYear = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updated: {
    type: Date,
    default: Date.now,
    required: true,
  },
  year: {
    type: Number,
    label: "Year",
  },
  cars: {
    type: Number,
    label: "Cars",
  },
  vans: {
    type: Number,
    label: "Vans",
  },
  suvs: {
    type: Number,
    label: "SUVs",
  },
  pickups: {
    type: Number,
    label: "Pickups",
  },
  total: {
    type: Number,
    label: "Total",
  },
});

// The actual collection name in the db will be created by using the name argument below.
// ** Mongoose/MongoDB will make it all lowercase and add an s on the end.
// Resulting collection name: vehicletypesbyyears
const ModelVehicleTypesByYear = mongoose.model(
  "VehicleTypesByYear",
  SchemaVehicleTypesByYear
);

export default ModelVehicleTypesByYear;


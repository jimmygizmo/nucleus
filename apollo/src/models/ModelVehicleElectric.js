import mongoose from "mongoose";

// Defining Schemas: https://mongoosejs.com/docs/guide.html#definition

// Schema Types: https://mongoosejs.com/docs/schematypes.html

// SCHEMA DESIGN BEST PRACTICES
// https://www.mongodb.com/developer/products/mongodb/mongodb-schema-design-best-practices/


const SchemaVehicleElectric = new mongoose.Schema({
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
  brand: {
    type: String,
    label: "Brand",
    maxLength: 40,
  },
  model: {
    type: String,
    label: "Model",
    maxLength: 80,
  },
  accel: {
    type: Number,
    label: "AccelSec",
    min: 0,
    max: 1000,
  },
  topspeed: {
    type: Number,
    label: "TopSpeed_KmH",
    min: 0,
    max: 2000,
  },
  range: {
    type: Number,
    label: "Range_Km",
    min: 0,
    max: 5000,
  },
  efficiency: {
    type: Number,
    label: "Efficiency_WhKm",
    min: 0,
    max: 5000,
  },
  fastcharge: {
    type: String,
    label: "FastCharge_KmH",
    maxLength: 20,
  },
  rapidcharge: {
    type: String,
    label: "RapidCharge",
    maxLength: 20,
  },
  powertrain: {
    type: String,
    label: "PowerTrain",
    maxLength: 40,
  },
  plug: {
    type: String,
    label: "PlugType",
    maxLength: 60,
  },
  body: {
    type: String,
    label: "BodyStyle",
    maxLength: 80,
  },
  segment: {
    type: String,
    label: "Segment",
    maxLength: 40,
  },
  seats: {
    type: Number,
    label: "Seats",
  },
  price: {
    type: Number,
    label: "PriceEuro",
  },
});


// Add a method to the schema before compiling it into the model:
// SchemaVehicleElectric.methods.greet = function greet() {
//   const greeting = "I am your intelligent vehicle. My brand and model is: " + this.brand + " " + this.model;
//   console.log(greeting);
// };


// Disable Mongoose-triggered full indexing for production. If it is needed for dev the switch with an ENV flag here.
SchemaVehicleElectric.set('autoIndex', false);
// TODO: Maybe just set this at the global level with: mongoose.set('autoIndex', false);
// It can be enabled on a per-table basis if ever needed in dev.


// The actual collection name in the db will be created by using the name argument below.
// ** Mongoose/MongoDB will make it all lowercase and add an s on the end.
// Resulting collection name: vehicleelectrics
const ModelVehicleElectric = mongoose.model(
  "VehicleElectric",
  SchemaVehicleElectric
);

// Example of how an error during indexing or in the indexing configuration would be logged (I guess.)
ModelVehicleElectric.on('index', error => {
  console.log(error.message);
});

export default ModelVehicleElectric;


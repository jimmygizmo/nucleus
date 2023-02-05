import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";

// The .js extension is required on the following imports:
import * as Config from "./config.js";
import * as ApolloHookLoggingPlugins from "./apolloHookLogging.js";
import ModelVehicleElectric from "./models/ModelVehicleElectric.js";
import ModelVehicleTypesByYear from "./models/ModelVehicleTypesByYear.js";

// Data loading imports
import { dataVehiclesElectricEU } from "./initdata/dataVehiclesElectricEU.js";
import { dataVehicleTypesByYear } from "./initdata/dataVehicleTypesByYear.js";

mongoose.set('debug', true);

// IMPORTANT: In some failure scenarios, this catch can allow more activity to be logged,
// even before this catch does its own logging. Strange effect but helpful.
main().catch(err => console.log(err));

const mongooseConnectionOptions = {
  autoIndex: false,  // Don't build indexes.
  maxPoolSize: 10,  // Socket connections. Increase under higher request rates (traffic).
  serverSelectionTimeoutMS: 5000,  // Keep trying to send operations for 5 seconds.
  socketTimeoutMS: 45000,  // Close sockets after 45 seconds of inactivity.
  family: 4,  // Use IPv4. Don't use IPv6.
};

async function main( mongooseConnectionOptions ) {
  await mongoose.connect( Config.mongoUrl, mongooseConnectionOptions );
}


// -------- TYPEDEFS GQL --------
const typeDefs = `#graphql

type GqlTypeVehicleElectric {
    _id: ID
    created: String
    updated: String
    brand: String
    model: String
    accel: Float
    topspeed: Int
    range: Int
    efficiency: Int
    fastcharge: String
    rapidcharge: String
    powertrain: String
    plug: String
    body: String
    segment: String
    seats: Int
    price: Int
}

type GqlTypeVehicleTypesByYear {
    _id: ID
    created: String
    updated: String
    year: String
    cars: String
    vans: String
    suvs: String
    pickups: String
    total: String
}

type Query {
    vehiclesElectric: [GqlTypeVehicleElectric]
    vehicleTypesYears: [GqlTypeVehicleTypesByYear]
}

`;
// ---- END GQL ----


// TODO: The names of the queries are one of the last places to put EU (or Eu) on the name of the symbol,
//   so make a final decision on this RE the query name. Don't do it until the web app is in place and
//   first have the web app running before changing this. Avoid query mismatch bugs when you can as they
//   can take longer to fix than most and the error reporting can be unhelpful sometimes. Try not to break them.
//   With GraphQL and Apollo the queries and the resolvers are touchy pain points to be treated with extra care.
const resolvers = {
  Query: {
    vehiclesElectric: async (parent, args, contextValue, info) => {
      console.log("==== ALL VehiclesElectricEU ====: ModelVehicleElectric.find()");
      const retVal = await ModelVehicleElectric.find().exec();
      console.log(
        "==== ALL VehicleElectric ====: returned data of length: " + retVal.length
      );
      return( retVal );
    },
    vehicleTypesYears: async (parent, args, contextValue, info) => {
      console.log("==== ALL VehicleTypesByYear ====: ModelVehicleTypesByYear.find()");
      const retVal = await ModelVehicleTypesByYear.find().exec();
      console.log(
        "==== ALL VehicleTypesByYear ====: returned data of length: " + retVal.length
      );
      return( retVal );
    },
  },
};


// ======================================================================================
// ======================================================================================


console.log("============ DATA INITIALIZATION ============: Verifying initial DB data");


console.log("---------------------------------");
console.log("======== VERIFY/LOAD COLLECTION ========: VehiclesElectricEU");
// Uses data file: ./initdata/dataVehiclesElectricEU.js

const importMorphVehiclesElectricEU = () => {
  const morphVehicleElectricEU = (indoc) => {
    // In this case the document is mapped directly over.
    // Field name changes are the only morphing that occurs here.
    const outdoc = {};
    outdoc.brand       = indoc.Brand;
    outdoc.model       = indoc.Model;
    outdoc.accel       = indoc.AccelSec;
    outdoc.topspeed    = indoc.TopSpeed_KmH;
    outdoc.range       = indoc.Range_Km;
    outdoc.efficiency  = indoc.Efficiency_WhKm;
    outdoc.fastcharge  = indoc.FastCharge_KmH;
    outdoc.rapidcharge = indoc.RapidCharge;
    outdoc.powertrain  = indoc.PowerTrain;
    outdoc.plug        = indoc.PlugType;
    outdoc.body        = indoc.BodyStyle;
    outdoc.segment     = indoc.Segment;
    outdoc.seats       = indoc.Seats;
    outdoc.price       = indoc.PriceEuro;
    return outdoc;
  };

  let oneOutDoc = null;
  dataVehiclesElectricEU.map( async ( oneInDoc ) => {
    oneOutDoc = new ModelVehicleElectric(
      morphVehicleElectricEU( oneInDoc )
    );
    await oneOutDoc.save();
  });
};

// TODO: Add a collection size check, compared to the data source and WARN if different.
const collectionVerifyVehiclesElectricEU = await ModelVehicleElectric.find().exec();
if (collectionVerifyVehiclesElectricEU.length === 0) {
  console.log("*********************************************");
  console.log("******** COLLECTION NOT PRESENT - LOADING ********: VehiclesElectricEU");
  importMorphVehiclesElectricEU();
} else {
  console.log("======== VERIFIED COLLECTION ========: VehiclesElectricEU");
}


// ======================================================================================


console.log("-----------------------------------");
console.log("======== VERIFY/LOAD COLLECTION ========: VehicleTypesByYear");
// Uses data file: ./initdata/dataVehicleTypesByYear.js

const importMorphVehicleTypesByYear = () => {
  const morphVehicleTypesByYear = (indoc) => {
    // In this case the document is not morphed at all and is mapped directly over.
    // The field names stay identical.
    const outdoc = {};
    outdoc.year       = indoc.year;
    outdoc.cars       = indoc.cars;
    outdoc.vans       = indoc.vans;
    outdoc.suvs       = indoc.suvs;
    outdoc.pickups    = indoc.pickups;
    outdoc.total      = indoc.total;
    return outdoc;
  };

  let oneOutDoc = null;
  dataVehicleTypesByYear.map( async ( oneInDoc ) => {
    oneOutDoc = new ModelVehicleTypesByYear(
      morphVehicleTypesByYear( oneInDoc )
    );
    await oneOutDoc.save();
  });
};

// TODO: Add a collection size check, compared to the data source and WARN if different.
const collectionVerifyVehicleTypesByYear = await ModelVehicleTypesByYear.find().exec();
if (collectionVerifyVehicleTypesByYear.length === 0) {
  console.log("*********************************************");
  console.log("******** COLLECTION NOT PRESENT - LOADING ********: VehicleTypesByYear");
  importMorphVehicleTypesByYear();
} else {
  console.log("======== VERIFIED COLLECTION ========: VehicleTypesByYear");
}


// ======================================================================================
// ======================================================================================


console.log("============ GRAPHQL SERVER STARTUP ============");

const server = new ApolloServer(
  {
    typeDefs,
    resolvers,
    plugins: [ApolloHookLoggingPlugins.apolloHookLogging],
  }
);

const { url } = await startStandaloneServer(server, {
  listen: { port: Config.apolloServicePort }
});

console.log(`🚀🚀🚀🚀🚀🚀🚀🚀 Apollo Server listening at: ${url}`);


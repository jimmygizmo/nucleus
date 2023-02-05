import dotenv from "dotenv";


const dotenvLoadResult = dotenv.config();
console.log("**** APOLLO CONFIG - Attempt to load and process .env file for configuration returned the following:");
console.log(dotenvLoadResult);
console.log("**** APOLLO CONFIG - Current process.env after container startup and .env file load attempt:");
console.log(process.env);
// NOTE: Even if no .env file with valid entries is successfully processed, there will still be a handful of
// process.env entries showing which were set by the base image, docker or some other factor.


// APOLLO ------------------------------------------------------------------------------------

const APOLLO_SERVICE_PORT_DEFAULT="44000";
export const apolloServicePort = process.env.APOLLO_SERVICE_PORT ||  APOLLO_SERVICE_PORT_DEFAULT;


// MONGODB -----------------------------------------------------------------------------------

const MONGO_SERVICE_HOST_DEFAULT = "nucleus-mongo";
const MONGO_SERVICE_PORT_DEFAULT = 27017;
const MONGO_SERVICE_DBNAME_DEFAULT = "nucleusdb";
const MONGO_SERVICE_USER_DEFAULT = "nucleusdbuser";
const MONGO_SERVICE_PASS_DEFAULT = "nucleusdbpass";
const mongoHost = process.env.MONGO_SERVICE_HOST || MONGO_SERVICE_HOST_DEFAULT;
const mongoPort = process.env.MONGO_SERVICE_PORT || MONGO_SERVICE_PORT_DEFAULT;
const mongoDbName = process.env.MONGO_SERVICE_DBNAME || MONGO_SERVICE_DBNAME_DEFAULT;
const mongoUser = process.env.MONGO_SERVICE_USER || MONGO_SERVICE_USER_DEFAULT;
const mongoPass = process.env.MONGO_SERVICE_PASS || MONGO_SERVICE_PASS_DEFAULT;

export const mongoUrl =
  "mongodb://" +
  mongoUser + ":" + mongoPass + "@" +
  mongoHost + ":" + mongoPort + "/" + mongoDbName;


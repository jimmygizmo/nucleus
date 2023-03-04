
console.log("-------- config.js:  process.env.NODE_ENV: ");
console.log(process.env.NODE_ENV);

// Development server mode:    WEB: http://localhost:3000    GQL: http://localhost:44000
//   Makes use of the full stack Apollo+MongoDB. App served by Node CRA dev server.
// ------------------------
// Full STACK LOCAL mode:    WEB: https://localhost:44443    GQL: https://localhost:44443/apollo
//
// ------------------------
// Full STACK DEPLOYED mode:    WEB: https://stackdemo.xyz    GQL: https://stackdemo.xyz/apollo
//
// ------------------------

// TODO: What are these next 3 lines trying to say?!
// Dev server:      http://localhost:44000
// STACK LOCAL:     https://localhost:44443/apollo
// STACK DEPLOYED:  https://stackdemo.xyz/apollo

// We need a runtime (browser-side) switch which can detect which mode our full stack is in.
// The key difference is different docker-compose.yml files.
// TODO: TEMPORARY COMPROMISE: WILL JUST USE DEV SERVER FOR NOW. STACK LOCAL WILL NOT WORK, BUT STACK DEPLOYED WILL.
// *** UPDATE: By switching the code blocks below per the comments, you can also use the full stack with SSL,
// but for now you will have to change the code before deployment.
// ** THIS IS HORRIBLE, I KNOW .. I HAVE A GOOD SOLUTION COMING SOON.
// TODO: PROBABLY WILL USE BABEL TRICK TO PARSE INTO CODE:


/* **************************************************************************** */

// USE THIS FOR PRODUCTION DEPLOYMENT:
// export const apolloUri = process.env.NODE_ENV ===
// "development" ? "http://localhost:44000" : "https://stackdemo.xyz/apollo";

// USE THIS FOR LOCAL FULL STACK TESTING USING YOUR RUNNING COMPOSE STACK
export const apolloUri = process.env.NODE_ENV ===
"development" ? "http://localhost:44000" : "https://localhost:44443/apollo";

/* **************************************************************************** */



// TODO: So the one we have not covered is STACK LOCAL: https://localhost:44443/apollo

console.log("-------- config.js: apolloUri: ");
console.log(apolloUri);


// FROM: https://stackoverflow.com/questions/35469836/detecting-production-vs-development-react-at-runtime


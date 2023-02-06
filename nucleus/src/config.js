
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
// STACK DEPLOYED:  https://autodash.app/apollo

// We need a runtime (browser-side) switch which can detect which mode our full stack is in.
// The key difference is different docker-compose.yml files.
// TODO: TEMPORARY COMPROMISE: WILL JUST USE DEV SERVER FOR NOW. STACK LOCAL WILL NOT WORK, BUT STACK DEPLOYED WILL.

export const apolloUri = process.env.NODE_ENV ===
"development" ? "http://localhost:44000" : "https://autodash.app/apollo";

// TODO: So the one we have not covered is STACK LOCAL: https://localhost:44443/apollo

console.log("-------- config.js: apolloUri: ");
console.log(apolloUri);


// FROM: https://stackoverflow.com/questions/35469836/detecting-production-vs-development-react-at-runtime



// -------- ApolloHookLoggingPlugins --------
// TODO: Should this be plural "plugins" or just "plugin"? The argument to the ApolloServer() constructor
//   is named the plural form so it's not clear what is correct without a closer look. It's a single object
//   passed but it contains multiple event handlers.

// Custom detailed logging plugin using Apollo hooks/events
// https://www.apollographql.com/docs/apollo-server/monitoring/metrics/#logging


export const apolloHookLogging = {
  // EVENT: GraphQL request received from a client.
  async requestDidStart(requestContext) {
    // Most queries are too long to log for every API request. Extract and log just the query name:
    const queryRegex = /query\s(\w+)\s\{/;
    const matches = requestContext.request.query.match(queryRegex);
    console.log("Request started. ==== QUERY: " + matches[1]);

    return {
      // SUB-EVENT: Parse a GraphQL request to create its associated document AST.
      async parsingDidStart(requestContext) {
        console.log("GraphQL parsing started. Creating document AST.");
      },

      // SUB-EVENT: Validate a request's document AST against your GraphQL schema.
      async validationDidStart(requestContext) {
        console.log("Validating AST against GQL schema.");
      },
    };  // end return
  },  // end async requestDidStart

  // EVENT: Server begins startup
  async serverWillStart() {
    console.log("Apollo GraphQL Server starting up.");

    return {
      // Docs say that this drainServer should be inside the RETURN of the async serverWillStart() function.
      // drainServer does not always fire. Maybe if there is no recent activity, it will not fire.
      // Tried two shutdown methods: CTRL-C on the compose session and "docker-compose down" from another console.
      async drainServer() {
        console.log("Apollo Server: drainServer");
      },
      async serverWillStop() {
        console.log("Apollo Server: serverWillStop");
      },
    };  // end return
  },  // end async serverWillStart
};


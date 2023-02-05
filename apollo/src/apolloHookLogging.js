
// -------- ApolloHookLoggingPlugins --------
// TODO: Should this be plural "plugins" or just "plugin"? The argument to the ApolloServer() constructor
//   is named the plural form so it's not clear what is correct without a closer look. It's a single object
//   passed but it contains multiple event handlers.

// Custom detailed logging plugin using Apollo hooks/events
// https://www.apollographql.com/docs/apollo-server/monitoring/metrics/#logging


export const apolloHookLogging = {
  // EVENT: GraphQL request received from a client.
  async requestDidStart(requestContext) {
    console.log('Request started! Query:\n' + requestContext.request.query);
    // console.log('Request started! Query: (not logged - too long)');

    return {
      // SUB-EVENT: Parse a GraphQL request to create its associated document AST.
      async parsingDidStart(requestContext) {
        console.log('Parsing started!');
      },

      // SUB-EVENT: Validate a request's document AST against your GraphQL schema.
      async validationDidStart(requestContext) {
        console.log('Validation started!');
      },
    };  // end return
  },  // end async requestDidStart

  // EVENT: Server begins startup
  async serverWillStart() {
    console.log('Server starting up!');

    return {
      // Docs say that this drainServer should be inside the RETURN of the async serverWillStart() function.
      // drainServer does not always fire. Maybe if there is no recent activity, it will not fire.
      // Tried two shutdown methods: CTRL-C on the compose session and "docker-compose down" from another console.
      async drainServer() {
        console.log('Server: drainServer');
      },
      async serverWillStop() {
        console.log('Server: serverWillStop');
      },
    };  // end return
  },  // end async serverWillStart
};


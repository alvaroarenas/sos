import {setupServer} from "msw/node";

export const mswBaseUrl = "http://localhost:8080";

/**
 * Start mock server:
 *
 * for consistent usage in tests, follow this pattern:
 * 1. call this method in beforeAll() and save the return value to test global variable. i.e. let server
 * 2. add afterEach() hook and call server.resetHandler() in it
 * 3. add afterAll() hook and call server.close()
 *
 * This ensures that your tests has single msw instance running and you don't experience
 * clashing msw servers.
 */
export const startMSWServer = () => {
  const server = setupServer();
  server.listen({
    // This tells MSW to throw an error whenever it
    // encounters a request that doesn't have a
    // matching request handler.
    onUnhandledRequest: "error",
  });
  return server;
};

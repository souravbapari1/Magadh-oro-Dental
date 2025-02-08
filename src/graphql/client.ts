import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
export const strApi = "https://cms.magadhorodental.com";
// Load the API key from environment variables
const API_KEY =
  process.env.GRAPHQL_KEY ||
  "3ba22b3dc334fcc20946950958c05f0fc9acceae4d5c832885e10750499de7939fe62626d8d6a694e576340db370e788ccf76cbf286478552d555f36a225c36dab0ef2fc49bfd7b0d56f4fe4450b32d5f5a24f3f2012a8f5ef97c905c7b954d055e22bc2ddc75cfe7f8ae7c80022a296f51544caaceb69b2fe98702d77f2f3de"; // Make sure to define this in .env.local

// Create an HTTP link to your GraphQL endpoint
const httpLink = new HttpLink({
  uri: strApi + "/graphql", // Replace with your GraphQL endpoint
});

// Add the API key to the request headers using setContext
const authLink = setContext((_, { headers }) => {
  return {
    next: { revalidate: 0 },
    headers: {
      ...headers,
      Authorization: `Bearer ${API_KEY}`, // Or 'x-api-key' depending on the API requirement
      fetchPolicy: "no-cache",
    },
  };
});

// Combine authLink and httpLink
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export default client;

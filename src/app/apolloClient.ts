import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';


const gqlRequest = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

const gqlHeaders = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
    }
  }
});

const apolloClient = new ApolloClient({
  link: gqlHeaders.concat(gqlRequest),
  cache: new InMemoryCache()
});

export default apolloClient;

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}/graphql` as string,
  cache: new InMemoryCache(),
});

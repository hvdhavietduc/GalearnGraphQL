import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});
export async function load() {
  const { data } = await client.query({
    query: gql`
      query {
        allUser {
          id
          name
          email
        }
      }
    `,
  });
  return {
    data,
  };
}

import { gql } from "@apollo/client";
import { client } from "../../graphQL/client.graphql";
export async function load() {
  await client.clearStore();

  const USER_FRAGMENT = gql`
    fragment UserFragment on User {
      id
      name
    }
  `;

  const { data } = await client.query({
    query: gql`
      query {
        allUser {
          ...UserFragment
          email
        }
      }
      ${USER_FRAGMENT}
    `,
  });
  return {
    data,
  };
}

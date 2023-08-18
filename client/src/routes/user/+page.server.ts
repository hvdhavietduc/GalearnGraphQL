import { gql } from "@apollo/client";
import { client } from "../../graphQL/client.graphql";
import type { Actions } from "@sveltejs/kit";
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
export const actions: Actions = {
  insertUser: async ({ request, cookies }) => {
    const input = await request.formData();
    const name = input.get("name");
    const mutation = gql`
      mutation insertUser($name: String!) {
        insertUser(name: $name) {
          id
          name
        }
      }
    `;
    const { data } = await client.mutate({
      mutation,
      variables: {
        name,
      },
    });
  },
  deleteUser: async ({ request, cookies, params }) => {
    const input = await request.formData();
    let id = input.get("id");

    const mutation = gql`
      mutation deleteUser($id: String!) {
        deleteUser(id: $id) {
          id
        }
      }
    `;
    await client.mutate({
      mutation,
      variables: {
        id,
      },
    });
  },
};

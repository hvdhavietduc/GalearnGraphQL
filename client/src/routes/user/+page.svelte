<script lang="ts">
  import { onMount } from "svelte";
  import { client } from "../../graphQL/client.graphql.js";
  import { gql } from "@apollo/client";
  export let data;
  let name = "";
</script>

<section>
  <form action="?/insertUser" method="post">
    <label for="">Insert User</label>
    <input type="text" id="name" name="name" placeholder="Input name" />
    <button type="submit">Submit</button>
  </form>
  {#each data.data.allUser as user}
    <div class="user">
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <form action="?/deleteUser" method="post">
        <input type="number" hidden name="id" value={user.id} />
        <button type="submit">Delete</button>
      </form>
    </div>
  {/each}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid black;
    margin: 10px;
  }
</style>

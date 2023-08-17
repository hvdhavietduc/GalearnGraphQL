<script lang="ts">
  export let data;
  let allUser= [];
  $: allUser = data.data.allUser;
</script>

<section>
  {#each allUser as user}
    <div class="user">
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
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

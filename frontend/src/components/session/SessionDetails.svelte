<script>
  import { getClient, query } from "svelte-apollo";
  import { gql } from "apollo-boost";

  import { params } from "@roxi/routify";

  const GETSESSION = gql`
    query($code: String!) {
      getSession(code: $code) {
        id
        code
        description
      }
    }
  `;
  const code = $params.code;
  const client = getClient();
  const sessions = query(GETSESSION, { variables: { code } });
</script>

<h2 class="text-xl">Session Details</h2>
{#await $sessions}
  <p>Loading...</p>
{:then data}
  {#if data.loading == false}
    {#if data.error}
      <p>Something wen't wrong</p>
    {:else if data != "undefinded"}
      <ul>
        <li>Description: {data.data.getSession.description}</li>
        <li>Code: {data.data.getSession.code}</li>
      </ul>
    {:else if data === "undefined"}
      <p>No data found</p>
    {/if}
  {/if}
{:catch error}
  <p>{error}</p>
{/await}

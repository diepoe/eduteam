<script>
  import { getClient, query } from "svelte-apollo";
  import { gql } from "apollo-boost";

  import { params } from "@roxi/routify";
  import Icon from "../icons/Icon.svelte";

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

<h2 class="text-2xl ">Session Details:</h2>
{#await $sessions}
  <p>Loading...</p>
{:then data}
  {#if data.loading == false}
    {#if data.error}
      <div class="flex flex-row">
        <Icon name="alert" />
        <p class=" text-red-600 font-bold text-xl">Something wen't wrong</p>
      </div>
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

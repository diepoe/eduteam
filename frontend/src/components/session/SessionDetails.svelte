<script>
  import { getClient, query } from "svelte-apollo";
  import { gql } from "apollo-boost";

  const GETSESSIONS = gql`
    query {
      getSessions {
        id
        code
        description
      }
    }
  `;
  const client = getClient();
  const sessions = query(GETSESSIONS);
  console.log(sessions);
</script>

<h2 class="text-xl">Session Details</h2>
{#await $sessions}
  <p>Loading...</p>
{:then data}
  {JSON.stringify(data)}
{:catch error}
  <p>Error</p>
{/await}

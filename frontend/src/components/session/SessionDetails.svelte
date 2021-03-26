<script>
  import { params } from "@roxi/routify";
  import { operationStore, query } from "@urql/svelte";

  const code = $params.code;
  const session = operationStore(
    `query ($code: String){
        allSessions(where: { code: $code }) {
          id 
          code
          title
          description
    }
  }`,
    { code }
  );

  query(session);
  console.log($session);
</script>

<h2 class="text-2xl ">Session Details:</h2>
<br />
{#if $session.fetching}
  Loading...
{:else if $session.error}
  Oh no! {$session.error.message}
  {JSON.stringify($session)}
{:else if !$session.data || $session.data.allSessions.length === 0}
  No data // session not found
{:else}
  {JSON.stringify($session.data.allSessions)}
{/if}

<script>
  import { params } from "@roxi/routify";
  import { operationStore, query } from "@urql/svelte";

  const code = $params.code;
  const session = operationStore(
    `{
        allSessions {
          id 
          title
          description
    }
  }`
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
{:else if !$session.data}
  No data
  {JSON.stringify($session)}
{:else}
  {JSON.stringify($session)}
{/if}

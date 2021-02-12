<script>
  import { url } from "@roxi/routify";
  import { mutation } from "svelte-apollo";
  import { gql } from "apollo-boost";

  import QrCode from "svelte-qrcode";

  const ADDSESSION = gql`
    mutation($description: String!, $randStr: String!) {
      addSession(description: $description, code: $randStr) {
        id
        code
        description
      }
    }
  `;
  const addSession = mutation(ADDSESSION);

  let description = "";
  async function handleSubmit() {
    console.log("Submitted");
    try {
      const randStr = Math.random().toString(20).substr(2, 6);
      await addSession({ variables: { description, randStr } });

      $: qrurl = $url("/session/" + randStr);
      return qrurl
    } catch (error) {
      console.log(error);
    }
  }
</script>

<h2 class="text-xl">Create a new session</h2>

<form on:submit|preventDefault={handleSubmit}>
  <input
    bind:value={description}
    placeholder="description"
    class="dark:bg-gray-800"
  />
  <button
    method="submit"
    class="transform scale-95 duration-300 p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 hover:scale-100 text-white rounded-xl self-center"
    >Create new session</button
  >
</form>

{#await handleSubmit}
  <p>Creating session...</p>
{:then data}
  <p class="text-green-500">Created session</p>
  <br>
  <QrCode value={data.qrurl} />
  <br>
{:catch error}
  <p>Error: {error}</p>
{/await}

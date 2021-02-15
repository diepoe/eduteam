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
  let showResult = false;

  async function handleSubmit() {
    console.log("Submitted");
    try {
      const randStr = Math.random().toString(20).substr(2, 6);
      showResult = true;

      return await addSession({ variables: { description, randStr } });
    } catch (error) {
      console.log(error);
    }
  }
</script>

<h2 class="text-center text-3xl">Create a new session</h2>

<form on:submit={handleSubmit}>
  <div class="flex flex-col justify-start">
    <input
      bind:value={description}
      placeholder="description"
      class="w-1/2 m-2 p-1 transform scale-100 duration-300 rounded-md border-indigo-500 border-3 focus:border-8 hover:border-indigo-600 focus:scale-105 dark:bg-gray-700"
    />
    <button
      method="submit"
      class="w-1/6 transform scale-95 duration-300 p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 hover:scale-100 text-white rounded-xl"
      >Create new session</button
    >
  </div>
</form>

{#await handleSubmit}
  <p>Creating session...</p>
{:then data}
  {console.log(data)}
  {#if showResult}
    <p class="text-black dark:text-white">Created session {data.randStr}</p>
    <br />
    <QrCode value="Troll" foreground="#F9FAFB" background="#1F2937" />
    <br />
  {/if}
{:catch error}
  <p>Error: {error}</p>
{/await}

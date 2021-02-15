<script>
  import "@github/markdown-toolbar-element";
  import Icon from "@/components/icons/Icon.svelte";
  import { mutation } from "svelte-apollo";
  import { gql } from "apollo-boost";

  const ADDCONTRIBUTION = gql`
    mutation($author: String!, $content: String!) {
      addContribution(description: $author, content: $content) {
        content
        author
      }
    }
  `;
  const addContribution = mutation(ADDCONTRIBUTION);

  let author = "";
  let content = "";
  async function handleSubmit() {
    console.log("Submitted");
    try {
      await addContribution({ variables: { author, content } });
    } catch (error) {
      console.log(error);
    }
  }
</script>

<h2 class="text-3xl text-center">Create your contribution</h2>

<form
  on:submit|preventDefault={handleSubmit}
  class="flex flex-col w-3/5 justify-center"
>
  <input
    type="text"
    bind:value={author}
    placeholder="Your name"
    class="self-start w-full m-1 transform scale-100 duration-300 rounded-md border-indigo-500 border-3 focus:border-8 hover:border-indigo-600 focus:scale-105 dark:bg-gray-700 dark:text-white"
  />
  <br />
  <markdown-toolbar
    class="mt-4 mb-2 flex flex-row p-2 border-solid border-2 border-gry-900 rounded-md"
    for="contribution-content"
  >
    <md-bold class="p-2 rounded hover:bg-gray-200"><Icon name="bold" /></md-bold
    >
    <md-header class="p-2 rounded hover:bg-gray-200"
      ><Icon name="header" /></md-header
    >
    <md-italic class="p-2 rounded hover:bg-gray-200"
      ><Icon name="italic" /></md-italic
    >
    <md-quote class="p-2 rounded hover:bg-gray-200"
      ><Icon name="blockquote" /></md-quote
    >
    <md-code class="p-2 rounded hover:bg-gray-200"><Icon name="code" /></md-code
    >
    <md-link class="p-2 rounded hover:bg-gray-200"><Icon name="link" /></md-link
    >
    <md-image class="p-2 rounded hover:bg-gray-200"
      ><Icon name="image" /></md-image
    >
    <md-unordered-list class="p-2 rounded hover:bg-gray-200"
      ><Icon name="list" /></md-unordered-list
    >
    <md-ordered-list class="p-2 rounded hover:bg-gray-200"
      ><Icon name="circle-1" /></md-ordered-list
    >
    <md-task-list class="p-2 rounded hover:bg-gray-200"
      ><Icon name="list-check" /></md-task-list
    >
  </markdown-toolbar>
  <textarea
    bind:value={content}
    id="contribution-content"
    class="rounded-md"
    cols="30"
    rows="10"
  />
  <br />
  <button
    method="submit"
    placeholder="Your Contribution"
    class="self-start transformsss duration-300 p-3 my-2 md:my-4 lg:my-6 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 hover:scale-110 text-white rounded-xl"
  >
    Add your Contribution
  </button>
</form>

<style>
  textarea {
    resize: none;
  }
</style>

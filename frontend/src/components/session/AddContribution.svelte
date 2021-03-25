<script>
  import Icon from "@/components/icons/Icon.svelte";
  import MdToolbar from "@/components/general/MDToolbar.svelte";

  import { mutation } from "@urql/svelte";

  let author = "";
  let content = "";

  const addContribution = mutation({
    query: `
    mutation($author: String!, $content: String!) {
      createContribution(author: $author, content: $content) {
        content
        author
      }
    }
  `,
  });

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
<MdToolbar target="contribution-content" />
<form
  on:submit|preventDefault={handleSubmit}
  class="place-items-center flex flex-col "
>
  <input
    type="text"
    bind:value={author}
    placeholder="Your name"
    class="place-content-center w-2/3  m-1 transform scale-100 duration-300 rounded-md border-indigo-500 border-3 focus:border-8 hover:border-indigo-600 focus:scale-105 dark:bg-gray-700 dark:text-white"
  />
  <br />

  <textarea
    bind:value={content}
    id="contribution-content"
    class="rounded-md w-2/3 dark:bg-gray-700"
    cols="30"
    rows="10"
  />
  <br />
  <button
    method="submit"
    placeholder="Your Contribution"
    class="text-center flex flex-row  transformsss duration-300 p-3 my-2 md:my-4 lg:my-6 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 hover:scale-110 text-white rounded-xl"
    ><Icon name="plus" />
    Add your Contribution
  </button>
</form>

<style>
  textarea {
    resize: none;
  }
</style>

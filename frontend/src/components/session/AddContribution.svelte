<script>
  import Icon from "@/components/icons/Icon.svelte";
  import MdToolbar from "@/components/general/MDToolbar.svelte";

  import { mutation } from "@urql/svelte";

  let author = "";
  let content = "";

  let disabled = false;

  const addContribution = mutation({
    query: `
    mutation($author: String!, $content: String!)  {
  createContribution(
    data: {
      author: $author
      content: $content
      session: { connect: { id: "605e0972244fd367cedf7791" } }
    }
  ) {
    id
  }
}
  `,
  });

  async function handleSubmit() {
    console.log("Submitted");
    try {
      await addContribution({ author, content }).then((result) => {
        console.log(result.data, result.error);
      });
      disabled = true;
    } catch (error) {
      console.log(error);
    }
  }
</script>

<h2 class="text-3xl text-center">Create your contribution</h2>

<form
  on:submit|preventDefault={handleSubmit}
  class="flex flex-col place-items-center "
>
  <input
    type="text"
    bind:value={author}
    placeholder="Your name"
    class="w-2/3 m-1 duration-300 transform scale-100 border-indigo-500 rounded-md place-content-center border-3 focus:border-8 hover:border-indigo-600 focus:scale-105 dark:bg-gray-700 dark:text-white"
  />
  <br />
  <MdToolbar target="contribution-content" />
  <br />
  <textarea
    bind:value={content}
    id="contribution-content"
    class="w-2/3 rounded-md dark:bg-gray-700"
    cols="30"
    rows="10"
  />
  <br />
  {#if !disabled}
    <button
      method="submit"
      placeholder="Your Contribution"
      class="flex flex-row p-3 my-2 text-center text-white duration-300 transformsss md:my-4 lg:my-6 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 hover:scale-110 rounded-xl"
      ><Icon name="plus" />
      Add your Contribution
    </button>
  {/if}
</form>

<style>
  textarea {
    resize: none;
  }
</style>

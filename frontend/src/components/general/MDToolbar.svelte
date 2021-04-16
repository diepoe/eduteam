<script>
  import "@github/markdown-toolbar-element";

  import Icon from "@/components/icons/Icon.svelte";

  export let target = "";
</script>

<markdown-toolbar
  class="flex flex-row flex-wrap p-2 m-auto border-2 border-gray-900 border-solid rounded-md dark:border-gray-50 md:w-max place-content-center"
  for={target}
>
  <md-bold class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    ><Icon name="bold" color="gray-900" dark="white" /></md-bold
  >
  <md-header class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    ><Icon name="header" color="gray-900" dark="white" /></md-header
  >
  <md-italic class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    ><Icon name="italic" color="gray-900" dark="white" /></md-italic
  >
  <md-quote class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    ><Icon name="blockquote" color="gray-900" dark="white" /></md-quote
  >
  <md-code class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    ><Icon name="code" color="gray-900" dark="white" /></md-code
  >
  <md-link class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    ><Icon name="link" color="gray-900" dark="white" /></md-link
  >
  <md-image class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    ><Icon name="image" color="gray-900" dark="white" /></md-image
  >
  <md-unordered-list
    class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    ><Icon name="list" color="gray-900" dark="white" /></md-unordered-list
  >
  <md-ordered-list class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    ><Icon name="circle-1" color="gray-900" dark="white" /></md-ordered-list
  >
  <md-task-list class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    ><Icon name="list-check" color="gray-900" dark="white" /></md-task-list
  >
</markdown-toolbar>

<script>
  import "@github/markdown-toolbar-element";

  import Icon from "@/components/icons/Icon.svelte";

  export let target = "";
</script>

<markdown-toolbar
  class="place-content-center mt-4 mb-2 flex flex-row p-2 border-solid border-2 border-gry-900 rounded-md"
  for={target}
>
  <md-bold class="p-2 rounded hover:bg-gray-200"><Icon name="bold" /></md-bold>
  <md-header class="p-2 rounded hover:bg-gray-200"
    ><Icon name="header" /></md-header
  >
  <md-italic class="p-2 rounded hover:bg-gray-200"
    ><Icon name="italic" /></md-italic
  >
  <md-quote class="p-2 rounded hover:bg-gray-200"
    ><Icon name="blockquote" /></md-quote
  >
  <md-code class="p-2 rounded hover:bg-gray-200"><Icon name="code" /></md-code>
  <md-link class="p-2 rounded hover:bg-gray-200"><Icon name="link" /></md-link>
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

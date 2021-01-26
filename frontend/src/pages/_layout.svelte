<!-- routify:options preload="proximity" -->
<script>
  import { metatags, page } from "@roxi/routify";
  import Nav from "@/components/Nav.svelte";

  $: metatags.title = "eduteam";
</script>

<Nav />
<main class="mx-5 my-4 px-5 py-1">
  <slot />
</main>

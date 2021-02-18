<script>
  import { url } from "@roxi/routify";
  import Icon from "@/components/icons/Icon.svelte";
</script>

<div class="e404">
  <div class="huge">404</div>
  <div class="big">
    <!-- link to the parent folder of _fallback.svelte -->

    <button
      class="transform duration-300 p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 hover:scale-110 text-white rounded-xl self-center"
    >
      <a href={$url("../")}> Page not found: Go back</a>
      <Icon name="go.back" />
    </button>
  </div>
</div>

<style>
  .huge {
    font-size: 11rem;
  }
  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>

<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
</script>

<style  global>
  @import "../assets/global.css";
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<Router {routes} />
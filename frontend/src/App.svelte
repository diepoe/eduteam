<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import { initClient } from "@urql/svelte";

  initClient({
    url: process.env.API_URL || "http://localhost:3000/admin/api",
  });
</script>

<Router {routes} />

<style global>
  @import "../assets/global.css";
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

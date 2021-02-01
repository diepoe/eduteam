<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";

  import ApolloClient from "apollo-boost";
  import { setClient } from "svelte-apollo";

  const client = new ApolloClient({ uri: "http://localhost:4000/graphql" });
  setClient(client);
</script>

<Router {routes} />

<style global>
  @import "../assets/global.css";
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

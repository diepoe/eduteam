<script>
  import { params } from "@roxi/routify";

  import SessionDetails from "@/components/session/SessionDetails.svelte";
  import AddContribution from "@/components/session/AddContribution.svelte"

  /*console.log($params); //  Object { code: "ahdsfl" }*/
  let urlparams = $params;
</script>

<h1>You're on session <b>{urlparams.code}</b></h1>
<br />
<SessionDetails />
<br>
<AddContribution />
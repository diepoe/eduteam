<script>
  import { metatags, url } from "@roxi/routify";
  metatags.title = "eduteam";
  metatags.description =
    "eduteam is a tool for teachers and students to collaborate on group work at their (homeschooling) lessons";

  let code = "";
</script>

<h1 class="text-5xl font-medium  text-center">Eduteam</h1>

<div class="flex justify-center align-middle mt-4 p-4 md:p-6 md:mt-8 space-x-2">
  <input
    id="codeinput"
    type="text"
    maxlength="6"
    bind:value={code}
    placeholder="Enter your code..."
    class="w-3/5 m-1 self-center duration-300 rounded-xl border-indigo-500 border-3 focus:border-8 hover:border-indigo-600 dark:bg-gray-700"
  />

  <a
    href="/session/{code}"
    class="transform duration-300 p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 hover:scale-110 text-white rounded-xl self-center"
    >&nbsp;&nbsp;Go&nbsp;&nbsp;</a
  >
</div>

<br />

<p>
  Create your own session <a href="/session/create" class="underline">here</a>
</p>

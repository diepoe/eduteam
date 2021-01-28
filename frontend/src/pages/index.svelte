<script>
  import { metatags, url } from "@roxi/routify";
  metatags.title = "eduteam";
  metatags.description =
    "eduteam is a tool for teachers and students to collaborate on group work at their (homeschooling) lessons";

  let code = "";
</script>

<h1 class="text-3xl font-medium">eduteam</h1>
<div class="flex justify-center align-middle mt-4 p-4 md:p-6 md:mt-8 space-x-2">
  <input
    id="codeinput"
    type="text"
    maxlength="6"
    bind:value={code}
    placeholder="Enter your code..."
    class="w-3/5 m-1 self-center transform duration-300 rounded-xl border-indigo-500 border-2 focus:scale-y-110 focus:border-8 focus:border-yellow-500 focus:ring-transparent hover:border-yellow-400 dark:bg-gray-700"
  />
  <a
    href="/session/{code}"
    class="transform duration-300 p-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:scale-110 text-white rounded-xl self-center"
    >Go</a
  >
</div>

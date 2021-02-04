<script>
  let isDark = false;
  function setTheme() {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      window.location.reload(true);
      isDark = false;
    } else localStorage.theme = "dark";
    window.location.reload(true);
    isDark = true;
  }

  let hide = "true";

  let menuItems = [
    { link: "/", name: "Home", rel: "prerender", target: "_self" },
    {
      link: "https://github.com/HAUDRAUFHAUN/eduteam",
      name: "GitHub",
      rel: "noopener",
      target: "_blank",
    },
  ];
</script>

<div class="max-w-full mx-auto focus-within ">
  <div
    class="relative z-10 pb-2 bg-blue-500 dark:bg-gray-800 sm:pb-6 md:pb-8 lg:max-w-full lg:w-full lg:pb-10 xl:pb-12s"
  >
    <div class="relative pt-2 px-4 sm:px-6 lg:px-8">
      <nav
        class="relative flex items-center justify-between sm:h-10 lg:justify-start lg:w-full"
        aria-label="Global"
      >
        <div
          class="hidden md:block lg:block xl:block md:ml-10 md:pr-4 md:space-x-8"
        >
          {#each menuItems as item}
            <a
              rel={item.rel}
              target={item.target}
              href={item.link}
              class="font-medium text-white hover:text-indigo-800 hover:bg-indigo-300 dark:text-white dark:hover:text-white p-3 rounded-md"
              >{item.name}</a
            >
          {/each}
          <button
            class="right-0 absolute p-1 rounded-lg text-gray-600 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-600 fill-current"
            on:click={() => setTheme()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
              <path d="M12 3v17" />
              <path d="M12 12l3.544 -3.544" />
              <path d="M12 17.3l5.558 -5.558" />
            </svg>
          </button>
        </div>
      </nav>
    </div>

    <!--
		  Mobile menu, show/hide based on menu open state.
  
		  Entering: "duration-150 ease-out"
			From: "opacity-0 scale-95"
			To: "opacity-100 scale-100"
		  Leaving: "duration-100 ease-in"
			From: "opacity-100 scale-100"
			To: "opacity-0 scale-95"
		-->
    <div class="md:hidden right-0">
      <div class:hidden={hide === "false"}>
        <div class="px-4 flex items-center justify-between">
          <div class="-m3-2">
            <button
              on:click={() => (hide = "false")}
              class="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center text-gray-400 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class:hidden={hide === "true"}>
      <div
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div
          class="rounded-lg shadow-md bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div class="-mr-2">
              <button
                type="button"
                on:click={() => (hide = "true")}
                class="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-red-500 dark:text-red-300 hover:text-red-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close main menu</span>
                <!-- Heroicon name: x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-2 pt-2 pb-3 space-y-1" role="none">
              {#each menuItems as item}
                <a
                  href={item.link}
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-600"
                  role="menuitem">{item.name}</a
                >
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>

<script>
  export let name;
  export let width = "24px";
  export let height = "24px";

  let icons = [
    {
      box: "24 24",
      name: "blockquote",
      svg: `<path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 15h15" />
  <path d="M21 19h-15" />
  <path d="M15 11h6" />
  <path d="M21 7h-6" />
  <path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
  <path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />`,
    },
    {
      box: "24 24",
      name: "bold",
      svg: ` <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z" />
  <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7" />`,
    },
    {
      box: "24 24",
      name: "circle-1",
      svg: `<path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M12 16v-8l-2 2" />
  <circle cx="12" cy="12" r="9" />`,
    },
    {
      box: "24 24",
      name: "code",
      svg: `<path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <polyline points="7 8 3 12 7 16" />
  <polyline points="17 8 21 12 17 16" />
  <line x1="14" y1="4" x2="10" y2="20" />`,
    },
    {
      box: "24 24",
      name: "header",
      svg: `<path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M19 14a2 2 0 1 0 -2 -2" />
  <path d="M17 16a2 2 0 1 0 2 -2" />
  <path d="M4 6v12" />
  <path d="M12 6v12" />
  <path d="M11 18h2" />
  <path d="M3 18h2" />
  <path d="M4 12h8" />
  <path d="M3 6h2" />
  <path d="M11 6h2" />`,
    },
    {
      box: "24 24",
      name: "image",
      svg: `<path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <line x1="15" y1="8" x2="15.01" y2="8" />
  <rect x="4" y="4" width="16" height="16" rx="3" />
  <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
  <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />`,
    },
    {
      box: "24 24",
      name: "italic",
      svg: `<path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <line x1="11" y1="5" x2="17" y2="5" />
  <line x1="7" y1="19" x2="13" y2="19" />
  <line x1="14" y1="5" x2="10" y2="19" />`,
    },
    {
      box: "24 24",
      name: "link",
      svg: `<path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />`,
    },
    {
      box: "24 24",
      name: "list",
      svg: `<path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <line x1="9" y1="6" x2="20" y2="6" />
  <line x1="9" y1="12" x2="20" y2="12" />
  <line x1="9" y1="18" x2="20" y2="18" />
  <line x1="5" y1="6" x2="5" y2="6.01" />
  <line x1="5" y1="12" x2="5" y2="12.01" />
  <line x1="5" y1="18" x2="5" y2="18.01" />`,
    },
    {
      box: "24 24",
      name: "list-check",
      svg: `  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
  <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
  <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
  <line x1="11" y1="6" x2="20" y2="6" />
  <line x1="11" y1="12" x2="20" y2="12" />
  <line x1="11" y1="18" x2="20" y2="18" />`,
    },
    {
      box: "24 24",
      name: "brand-github",
      svg: ` <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>`,
    },
    {
      box: "24 24",
      name: "plus",
      svg: `
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <circle cx="12" cy="12" r="9"></circle>
  <line x1="9" y1="12" x2="15" y2="12"></line>
  <line x1="12" y1="9" x2="12" y2="15"></line>`,
    },
    {
      box: "24 24",
      name: "alert",
      svg: ` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.7 3h6.6c.3 0 .5 .1 .7 .3l4.7 4.7c.2 .2 .3 .4 .3 .7v6.6c0 .3 -.1 .5 -.3 .7l-4.7 4.7c-.2 .2 -.4 .3 -.7 .3h-6.6c-.3 0 -.5 -.1 -.7 -.3l-4.7 -4.7c-.2 -.2 -.3 -.4 -.3 -.7v-6.6c0 -.3 .1 -.5 .3 -.7l4.7 -4.7c.2 -.2 .4 -.3 .7 -.3z"></path>
   <line x1="12" y1="8" x2="12" y2="12"></line>
   <line x1="12" y1="16" x2="12.01" y2="16"></line>`,
    },
  ];

  let displayIcon = icons.find((e) => e.name === name);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="svgicon {name} dark:text-white"
  {width}
  {height}
  viewBox="0 0 {displayIcon.box}">{@html displayIcon.svg}</svg
>

<style>
  :global(span.icon-wrapper) {
    padding: 2px 20px;
    display: flex;
    justify-items: start;
  }
  svg.svgicon {
    @apply h-5 w-5;
  }

  svg.blockquote {
    @apply text-gray-900;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  svg.bold {
    @apply text-gray-900;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.circle-1 {
    @apply text-gray-900;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.code {
    @apply text-gray-900;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.header {
    @apply text-gray-900;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.image {
    @apply text-gray-900;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.italic {
    @apply text-gray-900;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.list {
    @apply text-gray-900;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.link {
    @apply text-gray-900;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.list-check {
    @apply text-gray-900;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.brand-github {
    color: #181717;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.plus {
    @apply text-white;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
  svg.alert {
    @apply text-red-600;
    stroke-width: 2;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
</style>

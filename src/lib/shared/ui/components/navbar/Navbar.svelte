<script>
	let navlinks = [
		{
			"path": "/aboutus",
			"name": "About us",
		},
		{
			"path": "/event",
			"name": "Event",
		},
		{
			"path": "/workshop",
			"name": "Workshop",
		},
		{
			"path": "/schedule",
			"name": "Schedule",
		},
		{
			"path": "/merch",
			"name": "Merch",
		},
		{
			"path": "/sponsors",
			"name": "Sponsors",
		}

	]
</script>

<nav class="sticky top-0 z-50 w-full">
    <div class="flex items-center justify-between px-10 h-18 bg-black whitespace-nowrap">
      <a
        href="/"
        class="mr-10 font-[Helvetica] font-bold text-xl text-white"
      >
        PETRICHOR '26
      </a>

		<div class="px-20 hidden lg:flex space-x-6 xl:space-x-8 font-bold text-xl text-white">
			{#each navlinks as link}
				<a href={link.path}	>{link.name}</a>
			{/each}
		</div>
	  <div class="font-bold text-xl text-white">
		<h1>Profile</h1>
      </div>
    </div>
</nav>

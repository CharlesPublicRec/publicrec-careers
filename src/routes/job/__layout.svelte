<script>
	import '../../styles/tailwind-output.css';
	import Overview from '../../Overview.svelte';
</script>

<style lang="postcss">
	* {
		background-color: #fff;
	}

	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

<nav class="bg-white">
	<div class="pt-14 sm:pt-20 pb-8 bg-white text-black">
		<a href="/">
			<img class="w-32" src="/logo-black.png" alt="Public Rec logo" />
		</a>
	</div>
</nav>

<body class="container mx-auto px-4 sm:px-6 ">
	<div class="mt-12 sm:mt-20 mb-3 sm:mb-4">
		<a class="text-black uppercase text-xs hover:text-opacity-70 " href="/">
			&#8592 Back to Open Jobs
		</a>
	</div>

	<slot />
	<Overview />
</body>

<footer class="bg-white text-black">
	<div class="container bg-white mt-6 mx-auto">
		<hr />
		<div class="pb-4 my-10 flex flex-row justify-between align-middle items-center mx-auto">
			<p class="text-lg sm:text-2xl font-light">careers@publicrec.com</p>
			<a href="https://www.instagram.com/publicrec/?hl=en">
				<p
					class="text-black hover:text-opacity-80 text-xs sm:text-sm font-light uppercase text-right">
					Instagram
				</p>
			</a>
		</div>
	</div>
</footer>

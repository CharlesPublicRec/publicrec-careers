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
			<img class="w-[110px] sm:w-[130px]" src="/logo-black.png" alt="Public Rec logo" />
		</a>
	</div>
</nav>

<body class="container mx-auto px-4 sm:px-6 ">
	<div class="mt-12 sm:mt-20 mb-3 sm:mb-4">
		<a class="text-black uppercase text-[11px] hover:text-opacity-70 " href="/">
			&#8592 Back to Open Jobs
		</a>
	</div>

	<slot />
	<Overview />
</body>

<footer class="bg-white text-black">
	<div class="container mt-6 mx-auto">
		<hr />
		<div
			class="pb-4 my-12 sm:mt-[88px] flex flex-row justify-between align-middle items-center mx-auto">
			<p class="text-[24px] sm:text-[40px] font-light">careers@publicrec.com</p>
			<div class="flex flex-col">
				<a href="https://www.instagram.com/publicrec/?hl=en">
					<p class="text-black hover:text-opacity-80 text-[14px] font-light uppercase text-right">
						Instagram
					</p>
				</a>
				<a href="https://www.youtube.com/c/publicrec">
					<p class="text-black hover:text-opacity-80 text-[14px] font-light uppercase text-right">
						Youtube
					</p>
				</a>
			</div>

		</div>
	</div>
</footer>

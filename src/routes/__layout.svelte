<script>
	import '../styles/tailwind-output.css';
	import Overview from '../Overview.svelte';
</script>

<nav>
	<div class="pt-10 pb-8 px-4 sm:px-6 bg-black text-white">
		<a href="/">
			<img class="w-28" src="/logo.png" alt="Public Rec logo" />
		</a>
	</div>
</nav>

<body class="container mx-auto px-4 sm:px-6 bg-black">
	<slot />
	<Overview />
</body>

<footer class="bg-black text-white">
	<div class="container px-2 sm:px-6 mt-6 mx-auto">
		<hr />
		<div class="pb-4 my-10 flex flex-row justify-between align-middle items-center mx-auto">
			<p class="text-lg sm:text-2xl font-light">careers@publicrec.com</p>
			<a href="https://www.instagram.com/publicrec/?hl=en">
				<p
					class="text-white hover:text-opacity-80 text-xs sm:text-sm font-light uppercase text-right">
					Instagram
				</p>
			</a>
		</div>
	</div>
</footer>

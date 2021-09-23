<script>
	import '../../styles/tailwind-output.css';
	import Overview from '../../Overview.svelte';
	import Arrow from '../Arrow.svelte';
</script>

<style lang="postcss">
	* {
		background-color: #fff;
	}

	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

<div class="h-fill bg-white mx-auto">
	<nav>
		<div
			class="container max-w-[1120px] xl:max-w-[1280px] mx-auto pt-14 sm:pt-20 px-7 lg:px-12 pb-8
			bg-white text-black">
			<a href="/">
				<img class="w-[110px] sm:w-[130px]" src="/logo-black.png" alt="Public Rec logo" />
			</a>
		</div>
	</nav>

	<div class="container max-w-[1120px] xl:max-w-[1280px] px-7 lg:px-12 mx-auto">
		<div class="flex align-center mt-10 sm:mt-20 mb-3 sm:mb-4 align-center hover:opacity-70">
			<a class="text-black uppercase text-[11px] sm:text-[12px]" href="/">
				<Arrow
					icon="arrowLeft"
					classes="inline mr-2 sm:mr-4"
					width="20"
					height="10"
					viewBox="0 0 10 10"
					stroke="black"
					fill="black" />
				Back to Open Jobs
			</a>
		</div>
		<div class="text-black">
			<slot />
		</div>
		<Overview />
	</div>

	<footer class="bg-white text-black">
		<div class="container max-w-[1120px] xl:max-w-[1280px] px-7 lg:px-12 mt-7 mx-auto">
			<hr />
			<div
				class="pb-12 sm:pb-[88px] mt-8 mb-2 sm:mt-[88px] flex flex-col sm:flex-row justify-between
				align-bottom sm:items-center mx-auto">
				<div class="flex mb-4 sm:mb-0">
					<p class="text-[24px] sm:text-[40px] font-semibold">
						<a href="mailto:careers@publicrec.com">careers@publicrec.com</a>
					</p>
				</div>

				<div class="flex flex-col">
					<a class="mt-2 sm:mt-0" href="https://www.instagram.com/publicrec/?hl=en">
						<p
							class="text-black hover:text-opacity-80 text-[12px] sm:text-[14px] tracking-widest
							font-semibold uppercase sm:text-right">
							Instagram
						</p>
					</a>
					<a class="pt-4" href="https://www.youtube.com/c/publicrec">
						<p
							class="text-black hover:text-opacity-80 text-[12px] sm:text-[14px] tracking-widest
							font-semibold uppercase sm:text-right">
							Youtube
						</p>
					</a>
				</div>

			</div>
		</div>
	</footer>

</div>

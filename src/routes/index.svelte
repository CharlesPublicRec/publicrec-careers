<script>
	import '../styles/tailwind-output.css';
	import Arrow from './Arrow.svelte';
</script>

<svelte:head>
	<title>Public Rec Careers</title>
</svelte:head>

<div class="bg-black mx-auto h-fill">
	<nav>
		<div
			class="container max-w-[1120px] xl:max-w-[1280px] mx-auto pt-14 sm:pt-20 pb-8 px-7 lg:px-12
			bg-black text-white"
		>
			<a href="https://www.publicrec.com/">
				<img class="w-[110px] sm:w-[130px]" src="/logo.png" alt="Public Rec logo" />
			</a>
		</div>
	</nav>
	<div class="container max-w-[1120px] xl:max-w-[1280px] px-7 lg:px-12 mx-auto">
		<div class="bg-black text-white mx-auto">
			<h1 class="text-[48px] sm:text-[72px] mt-12 sm:mt-20 mb-7">Work With Us</h1>
			<div class="md:max-w-[900px]">
				<p class="text-[16px] sm:text-[24px] tracking-wide leading-8 sm:leading-9">
					Public Rec is a digitally-native apparel brand on a mission to make comfort look good.
					We’re a small, rapidly growing team, and we’re always on the lookout for good people who
					want to do great things.
					<br />
					<br />
					Think it’s a fit? Check out our open roles and apply below. If you don’t see the role you’re
					looking for, drop us a line at
					<a href="mailto:careers@publicrec.com">careers@publicrec.com.</a>
				</p>
			</div>

	<!-- Start of Job Section -->
			<div class="mt-12 sm:mt-32">
				<p class="hidden sm:block uppercase font-semibold text-[15px] tracking-widest mb-9">
					Open Jobs
				</p>
				<!-- <p class="text-white hover:text-opacity-80 text-[20px] sm:text-[32px]">
				No Open Roles
				</p>	 -->
				<h3 class="font-semibold text-[30px] sm:text-[48px]">Creative</h3>
				<hr class="mt-4 mb-6" />

				<div class="flex">
					<div class="flex-grow">
						<a href="/job/designer">
							<p class="text-white hover:text-opacity-80 text-[20px] sm:text-[32px]">
								Designer
							</p>
						</a>
						<p class="text-[11px] sm:text-[14px] mt-3 font-semibold tracking-widest uppercase">
							Chicago / Remote
						</p>
					</div>
					<div class="hidden sm:flex">
						<a class="hover:opacity-80 self-center" href="/job/designer">
							<Arrow
								icon="arrowRight"
								classes="inline"
								viewBox="0 0 36 17"
								width="36"
								height="17"
								stroke="white"
								fill="white"
							/>
						</a>
					</div>
					<div class="flex sm:hidden">
						<a class="hover:opacity-80 self-center" href="/job/designer">
							<Arrow
								icon="arrowRight"
								classes="inline"
								viewBox="0 0 36 17"
								width="25"
								height="12"
								stroke="white"
								fill="white"
							/>
						</a>
					</div>
					</div>
					<hr class="mt-8 mb-6" />
				<h3 class="font-semibold text-[30px] sm:text-[48px] mt-10">Operations</h3>
				<hr class="mt-4 mb-6" />

				<div class="flex">
					<div class="flex-grow">
						<a href="/job/operations-analyst">
							<p class="text-white hover:text-opacity-80 text-[20px] sm:text-[32px]">
								Operations Analyst
							</p>
						</a>
						<p class="text-[11px] sm:text-[14px] mt-3 font-semibold tracking-widest uppercase">
							Chicago / Remote
						</p>
					</div>
					<div class="hidden sm:flex">
						<a class="hover:opacity-80 self-center" href="/job/operations-analyst">
							<Arrow
								icon="arrowRight"
								classes="inline"
								viewBox="0 0 36 17"
								width="36"
								height="17"
								stroke="white"
								fill="white"
							/>
						</a>
					</div>
					<div class="flex sm:hidden">
						<a class="hover:opacity-80 self-center" href="/job/operations-analyst">
							<Arrow
								icon="arrowRight"
								classes="inline"
								viewBox="0 0 36 17"
								width="25"
								height="12"
								stroke="white"
								fill="white"
							/>
						</a>
					</div>
				</div>
				
				

				<hr class="mt-8 mb-6" />
			</div>	
		</div>

		<div class="text-white mb-8">
			<h3
				class="font-semibold mt-20 sm:mt-32 tracking-tight sm:tracking-normal text-[30px]
				sm:text-[48px]"
			>
				Working at Public Rec
			</h3>
			<div class="flex flex-col sm:flex-row mt-2 mb-10 sm:mb-32">
				<div>
					<p class="uppercase font-semibold text-[15px] tracking-wider mt-5 mb-4">Who We Are</p>
					<p class="sm:max-w-[660px] text-[14px] sm:text-[20px] leading-8 sm:leading-9">
						Our culture is all about autonomy, creativity, and collaboration. Respect is guaranteed,
						taking initiative is highly encouraged, and challenging the status quo is expected.
						Above all else, we work hard and try to not take ourselves too seriously along the way.
					</p>
					<p class="uppercase font-semibold text-[15px] tracking-wider mt-14 mb-4">Where We Work</p>
					<p class="sm:max-w-[660px] text-[14px] sm:text-[20px] leading-8 sm:leading-9">
						Our headquarters is based in Chicago. We currently have a flexible work-from-home policy
						that includes a mix of in-office and fully remote employees.
					</p>
					<p class="uppercase font-semibold text-[15px] tracking-wider mt-14 mb-4">What We Offer</p>

					<ul
						class="sm:max-w-[660px] text-[14px] sm:text-[20px] list-disc list-inside leading-7
						sm:leading-9"
					>
						<li class="pt-2">Flexible PTO policy with a required minimum</li>
						<li class="pt-2">
							Health, dental, vision, and short-term disability insurance coverage
						</li>
						<li class="pt-2">401K match eligibility after 6 months of employment</li>
						<li class="pt-2">Generous employee discount</li>
						<li class="pt-2">Generous parental leave policy</li>
					</ul>
				</div>
				<!-- <div class="w-5/12">
					<img class="mt-10 sm:mt-2" src="/office2.jpg" alt="Public Rec office" />
					<img class="mt-10 sm:mt-14" src="/office3.jpg" alt="Public Rec office" />
				</div> -->
			</div>
		</div>
	</div>
	<footer class="bg-black text-white">
		<div class="container max-w-[1120px] xl:max-w-[1280px] px-7 lg:px-12 mt-7 mx-auto">
			<hr />
			<div
				class="pb-12 sm:pb-[88px] mt-8 mb-2 sm:mt-[88px] flex flex-col sm:flex-row justify-between
				align-bottom sm:items-center mx-auto"
			>
				<div class="flex mb-4 sm:mb-0">
					<p class="text-[24px] sm:text-[40px] font-semibold">
						<a href="mailto:careers@publicrec.com">careers@publicrec.com</a>
					</p>
				</div>

				<div class="flex flex-col">
					<a class="mt-2 sm:mt-0" href="https://www.instagram.com/publicrec/?hl=en">
						<p
							class="text-white hover:text-opacity-80 text-[12px] sm:text-[14px] tracking-widest
							font-semibold uppercase sm:text-right"
						>
							Instagram
						</p>
					</a>
					<a class="pt-4" href="https://www.youtube.com/c/publicrec">
						<p
							class="text-white hover:text-opacity-80 text-[12px] sm:text-[14px] tracking-widest
							font-semibold uppercase sm:text-right"
						>
							Youtube
						</p>
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>

<style lang="postcss">
	* {
		background-color: #141414;
	}

	li {
		padding-left: 1em;
		text-indent: -1em;
	}
	@media (min-width: 480px) {
		li {
			padding-left: 1.37em;
			text-indent: -1.37em;
		}
	}
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

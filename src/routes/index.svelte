<script>
	import '../styles/tailwind-output.css';
	import Arrow from './Arrow.svelte';
</script>

<style lang="postcss">
	* {
		background-color: #141414;
	}
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

<svelte:head>
	<title>Public Rec Careers</title>
</svelte:head>

<div class="bg-black mx-auto h-fill">
	<nav>
		<div class="container mx-auto pt-14 sm:pt-20 pb-8 px-6 bg-black text-white">
			<a href="/">
				<img class="w-[110px] sm:w-[130px]" src="/logo.png" alt="Public Rec logo" />
			</a>
		</div>
	</nav>
	<div class="container px-6 mx-auto">
		<div class="bg-black text-white mx-auto">
			<h1 class="text-[48px] sm:text-[72px] mt-12 sm:mt-20 mb-7">Work With Us</h1>
			<div class="md:max-w-[696px]">
				<p class="text-[16px] sm:text-[24px] tracking-wide leading-8 sm:leading-9">
					Public Rec is a digitally-native apparel brand on a mission to make comfort look good.
					We’re a small, rapidly growing team, and we’re always on the lookout for good people who
					want to do great things.
					<br />
					<br />
					Think it’s a fit? Check out our open roles and apply below. If you don’t see the role
					you’re looking for, drop us a line at careers@publicrec.com.
				</p>
			</div>

			<div class="mt-20 sm:mt-32">
				<p class="uppercase font-semibold text-[15px] tracking-widest mb-9">Open Jobs</p>
				<h3 class="font-semibold text-[30px] sm:text-[48px]">Creative</h3>
				<hr class="mt-4 mb-6" />
				<div class="flex">
					<div class="flex-grow">
						<a href="/job/full-stack-dev">
							<p class="text-white hover:text-opacity-80 text-[20px] sm:text-[32px]">
								Full-Stack Developer
							</p>
						</a>
						<p class="text-[11px] sm:text-[14px] mt-3 font-semibold tracking-wider uppercase">
							Chicago / Los Angeles / Remote
						</p>
					</div>
					<div class="hidden sm:flex">
						<a class="hover:opacity-80 self-center" href="/job/full-stack-dev">
							<Arrow
								icon="arrowRight"
								classes="inline"
								viewBox="0 0 36 17"
								width="36"
								height="17"
								stroke="white"
								fill="white" />
						</a>
					</div>
					<div class="flex sm:hidden">
						<a class="hover:opacity-80 self-center" href="/job/full-stack-dev">
							<Arrow
								icon="arrowRight"
								classes="inline"
								viewBox="0 0 36 17"
								width="25"
								height="12"
								stroke="white"
								fill="white" />
						</a>
					</div>
				</div>
				<hr class="mt-8 mb-6" />
				<div class="flex">
					<div class="flex-grow">
						<a href="/job/design-lead">
							<p class="text-white hover:text-opacity-80 text-[20px] sm:text-[32px]">Design Lead</p>
						</a>
						<p class="text-[11px] sm:text-[14px] mt-3 font-semibold tracking-wider uppercase">
							Chicago / Los Angeles / Remote
						</p>
					</div>
					<div class="hidden sm:flex">
						<a class="hover:opacity-80 self-center" href="/job/full-stack-dev">
							<Arrow
								icon="arrowRight"
								classes="inline"
								viewBox="0 0 36 17"
								width="36"
								height="17"
								stroke="white"
								fill="white" />
						</a>
					</div>
					<div class="flex sm:hidden">
						<a class="hover:opacity-80 self-center" href="/job/full-stack-dev">
							<Arrow
								icon="arrowRight"
								classes="inline"
								viewBox="0 0 36 17"
								width="25"
								height="12"
								stroke="white"
								fill="white" />
						</a>
					</div>
				</div>
				<hr class="mt-8 mb-6" />
				<h3 class="font-semibold mt-20 text-[30px] sm:text-[48px]">Marketing</h3>
				<hr class="mt-4 mb-6" />
				<div class="flex">
					<div class="flex-grow">
						<a href="/job/influencer-manager">
							<p class="text-white hover:text-opacity-80 text-[20px] sm:text-[32px]">
								Influencer Manager
							</p>
						</a>
						<p class="text-[11px] sm:text-[14px] mt-3 font-semibold tracking-wider uppercase">
							Chicago / Remote
						</p>
					</div>
					<div class="hidden sm:flex">
						<a class="hover:opacity-80 self-center" href="/job/full-stack-dev">
							<Arrow
								icon="arrowRight"
								classes="inline"
								viewBox="0 0 36 17"
								width="36"
								height="17"
								stroke="white"
								fill="white" />
						</a>
					</div>
					<div class="flex sm:hidden">
						<a class="hover:opacity-80 self-center" href="/job/full-stack-dev">
							<Arrow
								icon="arrowRight"
								classes="inline"
								viewBox="0 0 36 17"
								width="25"
								height="12"
								stroke="white"
								fill="white" />
						</a>
					</div>
				</div>
				<hr class="mt-8 mb-3" />
			</div>

		</div>
		<div class="text-white mb-8">
			<h3
				class="font-semibold mt-20 sm:mt-32 tracking-tight sm:tracking-normal text-[30px]
				sm:text-[48px]">
				Working at Public Rec
			</h3>
			<div class="max-w-prose flex flex-col sm:flex-row mt-2 mb-10 sm:mb-32">
				<div>
					<p class="uppercase font-semibold text-[15px] tracking-wider mt-5 mb-4">Who We Are</p>
					<p class="sm:max-w-[553px] text-[14px] sm:text-[24px] font-light leading-8 sm:leading-9">
						Our culture is all about autonomy, creativity, and collaboration. Respect is guaranteed,
						taking initiative is highly encouraged, and challenging the status quo is expected.
						Above all else, we work hard and try to not take ourselves too seriously along the way.
					</p>
					<p class="uppercase font-semibold text-[15px] tracking-wider mt-14 mb-4">Where We Work</p>
					<p class="sm:max-w-[553px] text-[14px] sm:text-[24px] font-light leading-8 sm:leading-9">
						Our headquarters are based in Chicago. We currently have a flexible work from home
						policy that includes a mix of in-office and fully remote employees.
					</p>
					<p class="uppercase font-semibold text-[15px] tracking-wider mt-14 mb-4">What We Offer</p>

					<ul
						class="sm:max-w-[553px] text-[14px] sm:text-[24px] list-disc list-inside font-light
						leading-8 sm:leading-9">
						<li>Flexible PTO policy with a required minimum</li>
						<li>Health & dental insurance coverage</li>
						<li>Competitive parental leave policy</li>
						<li>Generous employee discount</li>
						<li>Flexible Work From Home model</li>
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
		<div class="container px-6 mt-7 mx-auto">
			<hr />
			<div
				class="pb-12 sm:pb-[88px] mt-8 mb-2 sm:mt-[88px] flex flex-col sm:flex-row justify-between
				align-bottom sm:items-center mx-auto">
				<div class="flex mb-4 sm:mb-0">
					<p class="text-[24px] sm:text-[40px] font-semibold">careers@publicrec.com</p>
				</div>

				<div class="flex flex-col">
					<a class="mt-2 sm:mt-0" href="https://www.instagram.com/publicrec/?hl=en">
						<p
							class="text-white hover:text-opacity-80 text-[12px] sm:text-[14px] tracking-widest
							font-semibold uppercase sm:text-right">
							Instagram
						</p>
					</a>
					<a class="pt-4" href="https://www.youtube.com/c/publicrec">
						<p
							class="text-white hover:text-opacity-80 text-[12px] sm:text-[14px] tracking-widest
							font-semibold uppercase sm:text-right">
							Youtube
						</p>
					</a>
				</div>

			</div>
		</div>
	</footer>
</div>

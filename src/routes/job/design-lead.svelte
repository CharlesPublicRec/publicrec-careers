<script>
	import Accordion from './Accordion.svelte';
	import AccordionItem from './AccordionItem.svelte';
	import Icon from './Icon.svelte';
	let key = 'a';
</script>

<style>
	li {
		padding-left: 1em;
		text-indent: -1em;
	}
</style>

<svelte:head>
	<title>Public Rec Careers | Design Lead</title>
</svelte:head>

<div class="text-black">

	<div class="container hidden sm:flex flex-grow justify-between">
		<div class="sm:w-7/12">
			<h1 class="text-[24px] sm:text-[48px] mb-5">Design Lead</h1>
			<p class="text-[20px] sm:text-[28px]">Overview</p>
			<p class="text-[16px] sm:text-[20px] mt-3">
				Public Rec is building a leisure apparel brand with products people love. We’re seeking a
				full-stack web developer to help bring web development in-house as we transition from our
				third-party agency.
				<br />
				<br />
				As our first in-house development hire, you will work cross-functionally with a group which
				includes our eCommerce manager, designers, and CRO team. This group’s overall purpose is to
				create a seamless user experience while maintaining an optimal conversion rate.
				<br />
				<br />
				Daily responsibilities will include building, implementing, and testing new designs and
				functionality across our website. Our ideal candidate will thrive in a collaborative
				environment with a high attention to detail.
				<br />
				<br />
				Public Rec’s website is built on a modern web stack including the following languages,
				frameworks, and tools:
				<br />
				<br />
				React - Gatsby - Contentful - Headless Shopify - Netlify – Optimizely
				<br />
				<br />
				This is a remote role based in the U.S. Our office is located in Chicago if there is
				interest in visiting or working from there.
				<br />
				<br />
				We are committed to building a diverse and inclusive environment at Public Rec. Please
				submit resumes to careers@publicrec.com.
			</p>
		</div>
		<div class="hidden lg:block sm:w-[332px]">
			<div class="bg-gray-300 border">
				<p class="text-black p-7">
					To apply for this role, please email your resume, cover letter, and link to online
					portfolio to careers@publicrec.com
				</p>
			</div>
		</div>
	</div>
	<div class="sm:hidden">
		<h1 class="text-[24px] sm:text-[48px] mb-5">Full Stack Developer</h1>
		<p class="text-[16px] sm:text-[20px] mt-3 mb-6">
			To apply for this role, please email your resume, cover letter, and link to online portfolio
			to careers@publicrec.com
		</p>
		<hr class="mt-5 mb-10" />
		<Accordion bind:key>
			<AccordionItem key="a">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Overview</h3>
				<Icon isOpen={true} slot="button" />
				<p class="text-[16px] sm:text-[20px] mt-3" slot="body">
					As our Full Stack Developer, you will collaborate with our eCommerce manager, Head of
					Marketing, Customer Experience, and the Creative team to evolve and refine our eCommerce
					web experience.
					<br />
					<br />
					This is a senior role for an experienced developer looking for and excited to work with
					React, Gatsby, and Contentful on our Headless Shopify Website. Our ideal candidate will
					welcome the chance to lead and grow our in-house Engineering team from the ground up.
					<br />
					<br />
					We provide endless opportunity and zero red tape. Scrappy and proud. This is a U.S. remote
					role, with an option to work from our HQ in Chicago.
				</p>
			</AccordionItem>
		</Accordion>
		<hr class="my-5" />
		<Accordion>
			<AccordionItem key="b">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Responsibilities</h3>
				<Icon isOpen={false} slot="button" />
				<ul
					class="sm:max-w-[553px] text-[16px] sm:text-[20px] list-disc list-inside font-light
					leading-8 sm:leading-9 mt-3"
					slot="body">
					<li>Assisting in scoping, estimating and allocating project work</li>
					<li>
						Building, implementing, and testing new designs and functionality across our website.
					</li>
					<li>
						Taking initiative on performance and conversion optimization efforts throughrecruiting
						and hiring
					</li>
					<span class="my-3">
						Our website is built on a modern web stack including the following:
					</span>
					<li>React</li>
					<li>Gatsby</li>
					<li>Contentful</li>
					<li>Headless Shopify</li>
					<li>Netlify</li>
					<li>Optimizely</li>
				</ul>

			</AccordionItem>
		</Accordion>
		<hr class="my-5" />
		<Accordion>
			<AccordionItem key="c">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Minimum Requirements</h3>
				<Icon isOpen={false} slot="button" />
				<ul
					class="sm:max-w-[553px] text-[16px] sm:text-[20px] list-disc list-inside font-light
					leading-8 sm:leading-9 mt-3"
					slot="body">
					<li>
						3+ years of professional experience as a Full Stack Developer supporting a brand or at a
						digital agency
					</li>
					<li>Experience leading project or engineering teams</li>
					<li>3+ years experience with React + Gatsby</li>
					<li>Proficiency in Shopify development</li>
					<li>Comfortable developing on top of Contentful</li>
					<li>An understanding of Headless Shopify development</li>
					<li>
						Enthusiasm for pushing the limits of technology and software to partner with Creative
						for a better customer experience
					</li>
					<li>Always exploring emerging technologies</li>
					<li>A collaborative mindset and passion for your craft</li>

				</ul>
			</AccordionItem>
		</Accordion>

	</div>

</div>

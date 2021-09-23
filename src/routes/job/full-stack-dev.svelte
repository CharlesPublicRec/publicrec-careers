<script>
	import Accordion from './Accordion.svelte';
	import AccordionItem from './AccordionItem.svelte';
	import Icon from './Icon.svelte';
	let key = 'a';
</script>

<style lang="postcss">
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
</style>

<svelte:head>
	<title>Public Rec Careers | Full Stack Developer</title>
</svelte:head>

<div class="text-black">

	<div class="container hidden sm:flex flex-grow justify-between">
		<div class="sm:w-7/12">
			<h1 class="text-[24px] sm:text-[48px] mb-5">Full Stack Developer</h1>
			<h3 class="text-[20px] sm:text-[28px]">Overview</h3>
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
				submit resumes to
				<a href="mailto:careers@publicrec.com">careers@publicrec.com.</a>

			</p>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Responsibilities</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">Assisting in scoping, estimating and allocating project work</li>
				<li class="pt-2">
					Building, implementing, and testing new designs and functionality across our website
				</li>
				<li class="pt-2">Taking initiative on performance and conversion optimization efforts</li>
				<li class="pt-2">
					Leadership and participation in growing the Engineering team through recruiting and hiring
				</li>
			</ul>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Minimum Requirements</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">
					3+ years of professional experience as a Full Stack Developer supporting a brand or at a
					digital agency
				</li>
				<li class="pt-2">Experience leading project or engineering teams</li>
				<li class="pt-2">3+ years experience with React + Gatsby</li>
				<li class="pt-2">Proficiency in Shopify development</li>
				<li class="pt-2">Comfortable developing on top of Contentful</li>
				<li class="pt-2">An understanding of Headless Shopify development</li>
				<li class="pt-2">
					Enthusiasm for pushing the limits of technology and software to partner with Creative for
					a better customer experience
				</li>
				<li class="pt-2">Always exploring emerging technologies</li>
				<li class="pt-2">A collaborative mindset and passion for your craft</li>
			</ul>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Ready to Apply?</h3>
			<p class="text-[16px] sm:text-[20px] mt-3">
				We are committed to building a diverse and inclusive environment at Public Rec. To apply for
				this role, please email your resume and cover letter to
				<a href="mailto:careers@publicrec.com">careers@publicrec.com.</a>

				<br />
				<br />
				Please include the job title in the subject line.
			</p>
		</div>
		<div class="hidden lg:block sm:w-[332px]">
			<div class="bg-gray-300 border">
				<p class="text-[18px] text-black p-7">
					To apply for this role, please email your resume, cover letter, and link to online
					portfolio to
					<a href="mailto:careers@publicrec.com">careers@publicrec.com</a>
				</p>
			</div>
		</div>
	</div>
	<div class="sm:hidden">
		<h1 class="text-[24px] sm:text-[48px] mb-5">Full Stack Developer</h1>
		<p class="text-[16px] sm:text-[20px] mt-3 mb-6">
			To apply for this role, please email your resume, cover letter, and link to online portfolio
			to
			<a href="mailto:careers@publicrec.com">careers@publicrec.com</a>
		</p>
		<hr class="my-5" />
		<Accordion bind:key>
			<AccordionItem key="a">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Overview</h3>
				<Icon isOpen={true} slot="button" />
				<p class="text-[16px] sm:text-[20px] mt-3" slot="body">
					Public Rec is building a leisure apparel brand with products people love. We’re seeking a
					full-stack web developer to help bring web development in-house as we transition from our
					third-party agency.
					<br />
					<br />
					As our first in-house development hire, you will work cross-functionally with a group
					which includes our eCommerce manager, designers, and CRO team. This group’s overall
					purpose is to create a seamless user experience while maintaining an optimal conversion
					rate.
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
					submit resumes to
					<a href="mailto:careers@publicrec.com">careers@publicrec.com.</a>

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
					<li class="pt-2">Assisting in scoping, estimating and allocating project work</li>
					<li class="pt-2">
						Building, implementing, and testing new designs and functionality across our website
					</li>
					<li class="pt-2">Taking initiative on performance and conversion optimization efforts</li>
					<li class="pt-2">
						Leadership and participation in growing the Engineering team through recruiting and
						hiring
					</li>
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
					<li class="pt-2">
						3+ years of professional experience as a Full Stack Developer supporting a brand or at a
						digital agency
					</li>
					<li class="pt-2">Experience leading project or engineering teams</li>
					<li class="pt-2">3+ years experience with React + Gatsby</li>
					<li class="pt-2">Proficiency in Shopify development</li>
					<li class="pt-2">Comfortable developing on top of Contentful</li>
					<li class="pt-2">An understanding of Headless Shopify development</li>
					<li class="pt-2">
						Enthusiasm for pushing the limits of technology and software to partner with Creative
						for a better customer experience
					</li>
					<li class="pt-2">Always exploring emerging technologies</li>
					<li class="pt-2">A collaborative mindset and passion for your craft</li>

				</ul>
			</AccordionItem>
		</Accordion>

	</div>

</div>

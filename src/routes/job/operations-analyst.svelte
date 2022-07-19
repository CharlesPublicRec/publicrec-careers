<script>
	import Accordion from './Accordion.svelte';
	import AccordionItem from './AccordionItem.svelte';
	import Icon from './Icon.svelte';
	let key = 'a';
</script>

<svelte:head>
	<title>Public Rec Careers | Operations Analyst</title>
</svelte:head>

<div class="text-black">
	<div class="container hidden sm:flex flex-grow justify-between">
		<div class="sm:w-7/12">
			<h1 class="text-[24px] sm:text-[48px] mb-5">Operations Analyst</h1>
			<h3 class="text-[20px] sm:text-[28px]">Overview</h3>
			<p class="text-[16px] sm:text-[20px] mt-3">
				Public Rec is building an athleisure apparel brand with products people love. We’re a small, rapidly growing team, and we’re always on the lookout for good people who want to do great things.
				<br />
				<br />
				We’re seeking an analyst to join our operations team. Reporting to our Operations Manager, this role will span all aspects of inventory management, forecasting, and logistics. This position will focus on optimizing our supply chain through metrics-driven decision making to maximize top line sales and minimize stock outs. This is a full-time role based in Chicago, with a flexible Work from Home model, but remote will be considered for the right candidate.	
			</p>
			<br />
			<br />
			<a
				class="mt-8"
				href="https://jobs.gusto.com/postings/public-rec-operations-analyst-0cdab918-9973-4f4a-bc63-7f529f3d1558/applicants/new"
			>
				<button
					class="h-12 px-6 text-white bg-black transition-colors duration-150 rounded-full
				focus:shadow-outline"
				>
					Apply Now
				</button>
			</a>

			<h3 class="text-[20px] sm:text-[28px] mt-10">Requirements</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">
					Bachelor's degree with 2+ years of work experience in an analytical role; inventory planning for a consumer brand is a plus.
				</li>
				<li class="pt-2">
					Familiarity with Flexport preferred, but not required.
				</li>
				<li class="pt-2">
					Strong technical aptitude with advanced competency in Microsoft Excel and high comfort level in working with data to distill a message.
				</li>
				<li class="pt-2">High attention to detail with a quantitative approach to problem solving.
				</li>
				<li class="pt-2">
					Possess a strong understanding of the consumer mindset, consumer empathy, and dedication to great consumer experiences.
				</li>
			</ul>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Responsibilities</h3>
			<h4 class="text-[18px] sm:text-[22px] mt-5">Owned:</h4>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-2">
				<li class="pt-2">
					 Broker transportation using Flexport and other third-party freight forwarders to ensure timely delivery of products to our fulfillment center.
				</li>
				<li class="pt-2">
					 Maintain delivery schedules of new and existing products within our inventory planning software.
				</li>
				<li class="pt-2">
					Coordinate with creative and marketing to communicate timing of new product launches and inventory restocks.
				</li>
				<li class="pt-2">
					Aggregate eligible orders and submit to Flexport for duty drawback on an ongoing basis.
				</li>
				<li class="pt-2">
					Review daily sell-through and compare against forecasts to support the reduction of inventory on hand while minimizing out of stocks.
				</li>
				<li class="pt-2">
					Assist with new item setup and existing product maintenance in Shopify.
				</li>
				<li class="pt-2">
					Manage inventory of packaging supplies at 3PL and place replenishment orders as needed.
				</li>
			</ul>
			<h4 class="text-[18px] sm:text-[22px] mt-10">Supporting:</h4>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-2">
				<li class="pt-2">
					Optimize inventory across our website, wholesale, and retail store channels to create a holistic omnichannel experience for our customers while prioritizing profitability.
				</li>
				<li class="pt-2">
					Assist in pricing optimization analysis to maximize margin and inventory turns.
				</li>
				<li class="pt-2">
					 Work with operations and finance to develop our annual forecast and projected product sell-through.
				</li>
			</ul>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Ready to Apply?</h3>
			<p class="text-[16px] sm:text-[20px] mt-3">
				We are committed to building a diverse and inclusive environment at Public Rec.
			</p>
			<br /><br />
			<a
				class="mt-8"
				href="https://jobs.gusto.com/postings/public-rec-operations-analyst-0cdab918-9973-4f4a-bc63-7f529f3d1558/applicants/new"
			>
				<button
					class="h-12 px-6 text-white bg-black transition-colors duration-150 rounded-full
					focus:shadow-outline"
				>
					Apply Now
				</button>
			</a>
		</div>
		<!-- <div class="hidden lg:block sm:w-[332px]">
			<div class="bg-gray-300 border">
				<p class="text-[18px] text-black p-7">
					To apply for this role, please email your resume, cover letter, and link to online
					portfolio to
					<a href="mailto:careers@publicrec.com">careers@publicrec.com</a>
				</p>
			</div>
		</div> -->
	</div>
	<div class="sm:hidden">
		<h1 class="text-[24px] sm:text-[48px] mb-5">Operations Analyst</h1>
		<hr class="my-5" />
		<Accordion bind:key>
			<AccordionItem key="a">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Overview</h3>
				<Icon isOpen={true} slot="button" />
				<p class="text-[16px] sm:text-[20px] mt-3" slot="body">
					Public Rec is building an athleisure apparel brand with products people love. We’re a small, rapidly growing team, and we’re always on the lookout for good people who want to do great things.
				<br />
				<br />
				We’re seeking an analyst to join our operations team. Reporting to our Operations Manager, this role will span all aspects of inventory management, forecasting, and logistics. This position will focus on optimizing our supply chain through metrics-driven decision making to maximize top line sales and minimize stock outs. This is a full-time role based in Chicago, with a flexible Work from Home model, but remote will be considered for the right candidate.	
			</p>
				<br />

				<a
					class="mt-8"
					href="https://jobs.gusto.com/postings/public-rec-operations-analyst-0cdab918-9973-4f4a-bc63-7f529f3d1558/applicants/new"
				>
					<button
						class="h-12 px-6 text-white bg-black transition-colors duration-150 rounded-full
				focus:shadow-outline"
					>
						Apply Now
					</button>
				</a>
			</AccordionItem>
		</Accordion>
		<hr class="my-5" />
		<h3 class="text-[20px] sm:text-[28px] mb-5" >Responsibilities</h3>
		<Accordion>
			<AccordionItem key="b">
				<h4 class="text-[18px] sm:text-[20px]" slot="header" >Owned:</h4>
				<Icon isOpen={false} slot="button" />
				<br>
				<ul
				class="sm:max-w-[553px] text-[16px] sm:text-[18px] list-disc list-inside font-light
				leading-8 sm:leading-9 mt-3"
				slot="body"
				>
				<li class="pt-2">
					 Broker transportation using Flexport and other third-party freight forwarders to ensure timely delivery of products to our fulfillment center.
				</li>
				<li class="pt-2">
					 Maintain delivery schedules of new and existing products within our inventory planning software.
				</li>
				<li class="pt-2">
					Coordinate with creative and marketing to communicate timing of new product launches and inventory restocks.
				</li>
				<li class="pt-2">
					Aggregate eligible orders and submit to Flexport for duty drawback on an ongoing basis.
				</li>
				<li class="pt-2">
					Review daily sell-through and compare against forecasts to support the reduction of inventory on hand while minimizing out of stocks.
				</li>
				<li class="pt-2">
					Assist with new item setup and existing product maintenance in Shopify.
				</li>
				<li class="pt-2">
					Manage inventory of packaging supplies at 3PL and place replenishment orders as needed.
				</li>
				</ul>
				
			</AccordionItem>
			<AccordionItem key="c">
				<h4 class="text-[18px] sm:text-[20px]" slot="header" >Supporting:</h4>
				<Icon isOpen={false} slot="button" />
				<ul
				class="sm:max-w-[553px] text-[16px] sm:text-[18px] list-disc list-inside font-light
				leading-8 sm:leading-9 mt-3"
				slot="body"
				>
				<li class="pt-2">
				Optimize inventory across our website, wholesale, and retail store channels to create a holistic omnichannel experience for our customers while prioritizing profitability.
				</li>
				<li class="pt-2">
					 Assist in pricing optimization analysis to maximize margin and inventory turns.
				</li>
				<li class="pt-2">
					Work with operations and finance to develop our annual forecast and projected product sell-through.
				</li>
				</ul>
				
			</AccordionItem>
		</Accordion>
		<hr class="my-5" />
		<Accordion>
			<AccordionItem key="d">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Requirements</h3>
				<Icon isOpen={false} slot="button" />
				<ul
					class="sm:max-w-[553px] text-[16px] sm:text-[20px] list-disc list-inside font-light
					leading-8 sm:leading-9 mt-3"
					slot="body"
				>
					<li class="pt-2">
					Bachelor's degree with 2+ years of work experience in an analytical role; inventory planning for a consumer brand is a plus.
				</li>
				<li class="pt-2">
					Familiarity with Flexport preferred, but not required.
				</li>
				<li class="pt-2">
					Strong technical aptitude with advanced competency in Microsoft Excel and high comfort level in working with data to distill a message.
				</li>
				<li class="pt-2">
					High attention to detail with a quantitative approach to problem solving.
				</li>
				<li class="pt-2">
					Possess a strong understanding of the consumer mindset, consumer empathy, and dedication to great consumer experiences.
				</li>
				</ul>
			</AccordionItem>
		</Accordion>
	</div>
</div>

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

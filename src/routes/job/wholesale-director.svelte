<script>
	import Accordion from './Accordion.svelte';
	import AccordionItem from './AccordionItem.svelte';
	import Icon from './Icon.svelte';
	let key = 'a';
</script>

<svelte:head>
	<title>Public Rec Careers | Wholesale Director</title>
</svelte:head>

<div class="text-black">
	<div class="container hidden sm:flex flex-grow justify-between">
		<div class="sm:w-7/12">
			<h1 class="text-[24px] sm:text-[48px] mb-5">Wholesale Director</h1>
			<h3 class="text-[20px] sm:text-[28px]">Overview</h3>
			<p class="text-[16px] sm:text-[20px] mt-3">
				Public Rec is building a leisure apparel brand with products people love. We’re seeking a
				Wholesale Director to drive growth in our wholesale business. You’ll work directly with our
				CEO to strategize how best to grow this channel, including assessing (i) key new accounts to
				target within big box, specialty, outdoor, fitness, golf, resorts, and corporate, (ii)
				tradeshows to attend, and (iii) hires to make.
				<br />
				<br />
				We are committed to building a diverse and inclusive environment at Public Rec. Please submit
				resumes to
				<a href="mailto:careers@publicrec.com">careers@publicrec.com.</a>
			</p>

			<h3 class="text-[20px] sm:text-[28px] mt-10">Qualifications & Attributes</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">Bachelor’s degree or equivalent work experience.</li>
				<li class="pt-2">
					10+ years of sales experience in a fast paced, fashion/apparel environment. Experience
					with big box or outdoor retailers is preferred.
				</li>
				<li class="pt-2">
					Ability to develop seasonal assortments, forecasts, and scenario planning.
				</li>
				<li class="pt-2">
					High business acumen to understand retail margin and account profitability.
				</li>
				<li class="pt-2">
					Experience working across multiple teams to forecast inventory demand, oversee order
					fulfillment, and navigate relevant software including SPS Commerce and NuOrder.
				</li>
				<li class="pt-2">Proven success in meeting deadlines and revenue goals.</li>
				<li class="pt-2">
					Strong understanding of the consumer mindset, consumer empathy, and dedication to great
					consumer experiences.
				</li>
			</ul>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Responsibilities</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">
					Create and execute short and long-term strategic growth plans to acquire new accounts in
					big box, outdoor, fitness, specialty, golf/resort and corporate.
				</li>
				<li class="pt-2">
					Assess our needs as we grow. Recruit, hire, train, and manage internal wholesale
					associates and external reps.
				</li>
				<li class="pt-2">
					Achieve annual revenue and profitability targets based on financial planning, forecasting,
					sell thru analysis, consumer insights, and account strategic priorities.
				</li>
				<li class="pt-2">
					Work closely with merchandising and planning teams to ensure we are delivering consumer
					right assortments for each channel and account every season.
				</li>
				<li class="pt-2">
					Review weekly/monthly retail sales, profitability, and inventory performance by account
					and channel to identify opportunities and risks; provide recommendations to ensure we
					continue to track towards our financial goals.
				</li>
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
		<h1 class="text-[24px] sm:text-[48px] mb-5">Wholesale Director</h1>
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
					Wholesale Director to drive growth in our wholesale business. You’ll work directly with
					our CEO to strategize how best to grow this channel, including assessing (i) key new
					accounts to target within big box, specialty, outdoor, fitness, golf, resorts, and
					corporate, (ii) tradeshows to attend, and (iii) hires to make.
					<br />
					<br />
					We are committed to building a diverse and inclusive environment at Public Rec. Please submit
					resumes to
					<a href="mailto:careers@publicrec.com">careers@publicrec.com.</a>
				</p>
			</AccordionItem>
		</Accordion>
		<hr class="my-5" />
		<Accordion>
			<AccordionItem key="b">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Qualifications & Attributes</h3>
				<Icon isOpen={false} slot="button" />
				<ul
					class="sm:max-w-[553px] text-[16px] sm:text-[20px] list-disc list-inside font-light
					leading-8 sm:leading-9 mt-3"
					slot="body"
				>
				<li class="pt-2">Bachelor’s degree or equivalent work experience.</li>
				<li class="pt-2">
					10+ years of sales experience in a fast paced, fashion/apparel environment. Experience
					with big box or outdoor retailers is preferred.
				</li>
				<li class="pt-2">
					Ability to develop seasonal assortments, forecasts, and scenario planning.
				</li>
				<li class="pt-2">
					High business acumen to understand retail margin and account profitability.
				</li>
				<li class="pt-2">
					Experience working across multiple teams to forecast inventory demand, oversee order
					fulfillment, and navigate relevant software including SPS Commerce and NuOrder.
				</li>
				<li class="pt-2">Proven success in meeting deadlines and revenue goals.</li>
				<li class="pt-2">
					Strong understanding of the consumer mindset, consumer empathy, and dedication to great
					consumer experiences.
				</li>
				</ul>
			</AccordionItem>
		</Accordion>
		<hr class="my-5" />
		<Accordion>
			<AccordionItem key="c">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Responsibilities</h3>
				<Icon isOpen={false} slot="button" />
				<ul
					class="sm:max-w-[553px] text-[16px] sm:text-[20px] list-disc list-inside font-light
					leading-8 sm:leading-9 mt-3"
					slot="body"
				>
				<li class="pt-2">
					Create and execute short and long-term strategic growth plans to acquire new accounts in
					big box, outdoor, fitness, specialty, golf/resort and corporate.
				</li>
				<li class="pt-2">
					Assess our needs as we grow. Recruit, hire, train, and manage internal wholesale
					associates and external reps.
				</li>
				<li class="pt-2">
					Achieve annual revenue and profitability targets based on financial planning, forecasting,
					sell thru analysis, consumer insights, and account strategic priorities.
				</li>
				<li class="pt-2">
					Work closely with merchandising and planning teams to ensure we are delivering consumer
					right assortments for each channel and account every season.
				</li>
				<li class="pt-2">
					Review weekly/monthly retail sales, profitability, and inventory performance by account
					and channel to identify opportunities and risks; provide recommendations to ensure we
					continue to track towards our financial goals.
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

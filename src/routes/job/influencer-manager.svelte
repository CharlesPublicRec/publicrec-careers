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
	<title>Public Rec Careers | Influencer Manager</title>
</svelte:head>

<div class="text-black">

	<div class="container hidden sm:flex flex-grow justify-between">
		<div class="sm:w-7/12">
			<h1 class="text-[24px] sm:text-[48px] mb-5">Influencer Manager</h1>
			<h3 class="text-[20px] sm:text-[28px]">Overview</h3>
			<p class="text-[16px] sm:text-[20px] mt-3">
				Public Rec is building a digitally native leisure brand on a mission to make comfort look
				good. We’re growing rapidly and looking for someone to join the Marketing team. Chicago
				preferred, but open to remote for the right person.
				<br />
				<br />
				We’re seeking an experienced Influencer and Partnerships Manager to join our marketing team.
				Reporting to our Head of Marketing, this role will be key in building out our influencer and
				brand ambassador programs from the ground floor. The right candidate will already have
				pre-existing relationships with influencers in the fashion/apparel/retail space and will
				help identify new partnerships and areas of focus.
				<br />
				<br />
				As the Influencer Manager, you will own the execution of major influencer and brand
				ambassador campaigns including sourcing, negotiating terms and usage rights, sending
				product, and working with Creative on getting assets approved from the Influencers and
				ambassadors. Ability to run whitelisted paid social ads is a plus.
				<br />
				<br />
				This is a full-time role based in Chicago, with a flexible Work From Home model. Remote
				considered for the right candidate.
			</p>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Responsibilities</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">
					Prospect, negotiate, and coordinate product sends to key influencers and partners
				</li>
				<li class="pt-2">Maintain a content schedule and approve all creative assets</li>
				<li class="pt-2">
					Manage and execute influencer campaign, with a main KPI of driving new revenue
				</li>
				<li class="pt-2">Identify new areas and types of partnerships we should pursue</li>
				<li class="pt-2">Understand how to align brand vision with an influencer’s persona</li>
			</ul>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Minimum Requirements</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">3-5 years of experience working with Influencers</li>
				<li class="pt-2">
					Experience managing multiple projects at a time, demonstrating an ability to prioritize
					responsibilities to quickly and effectively meet deadlines
				</li>
				<li class="pt-2">Demonstrated autonomy to lead a project in a fast-paced environment</li>
				<li class="pt-2">
					Experience working with all levels of influencers and brand ambassadors from micro to
					major celebrities
				</li>
				<li class="pt-2">
					Relationship-builder: Always thinking of ways to add value to the partners and create a
					stronger bond between Public Rec and the partner
				</li>
				<li class="pt-2">An enthusiastic and curious mindset for continuous improvement</li>
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
		<div class="hidden lg:block sm:max-w-[332px]">
			<div class="bg-gray-300 border">
				<p class="text-black text-[18px] p-7">
					To apply for this role, please email your resume, cover letter, and link to online
					portfolio to
					<a href="mailto:careers@publicrec.com">careers@publicrec.com</a>
				</p>
			</div>
		</div>
	</div>
	<div class="sm:hidden">
		<h1 class="text-[24px] sm:text-[48px] mb-5">Influencer Manager</h1>
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
					Public Rec is building a digitally native leisure brand on a mission to make comfort look
					good. We’re growing rapidly and looking for someone to join the Marketing team. Chicago
					preferred, but open to remote for the right person.
					<br />
					<br />
					We’re seeking an experienced Influencer and Partnerships Manager to join our marketing
					team. Reporting to our Head of Marketing, this role will be key in building out our
					influencer and brand ambassador programs from the ground floor. The right candidate will
					already have pre-existing relationships with influencers in the fashion/apparel/retail
					space and will help identify new partnerships and areas of focus.
					<br />
					<br />
					As the Influencer Manager, you will own the execution of major influencer and brand
					ambassador campaigns including sourcing, negotiating terms and usage rights, sending
					product, and working with Creative on getting assets approved from the Influencers and
					ambassadors. Ability to run whitelisted paid social ads is a plus.
					<br />
					<br />
					This is a full-time role based in Chicago, with a flexible Work From Home model. Remote
					considered for the right candidate.
				</p>
			</AccordionItem>
		</Accordion>
		<hr class="my-5" />
		<Accordion>
			<AccordionItem key="b">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Responsibilities</h3>
				<Icon isOpen={false} slot="button" />
				<ul
					class="sm:max-w-[553px] text-[16px] sm:text-[20px] list-disc list-inside leading-8
					sm:leading-9 mt-3"
					slot="body">
					<li class="pt-2">
						Prospect, negotiate, and coordinate product sends to key influencers and partners
					</li>
					<li class="pt-2">Maintain a content schedule and approve all creative assets</li>
					<li class="pt-2">
						Manage and execute influencer campaign, with a main KPI of driving new revenue
					</li>
					<li class="pt-2">Identify new areas and types of partnerships we should pursue</li>
					<li class="pt-2">Understand how to align brand vision with an influencer’s persona</li>
				</ul>

			</AccordionItem>
		</Accordion>
		<hr class="my-5" />
		<Accordion>
			<AccordionItem key="c">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Minimum Requirements</h3>
				<Icon isOpen={false} slot="button" />
				<ul
					class="sm:max-w-[553px] text-[16px] sm:text-[20px] list-disc list-inside leading-8
					sm:leading-9 mt-3"
					slot="body">
					<li class="pt-2">3-5 years of experience working with Influencers</li>
					<li class="pt-2">
						Experience managing multiple projects at a time, demonstrating an ability to prioritize
						responsibilities to quickly and effectively meet deadlines
					</li>
					<li class="pt-2">Demonstrated autonomy to lead a project in a fast-paced environment</li>
					<li class="pt-2">
						Experience working with all levels of influencers and brand ambassadors from micro to
						major celebrities
					</li>
					<li class="pt-2">
						Relationship-builder: Always thinking of ways to add value to the partners and create a
						stronger bond between Public Rec and the partner
					</li>
					<li class="pt-2">An enthusiastic and curious mindset for continuous improvement</li>
				</ul>
			</AccordionItem>
		</Accordion>

	</div>

</div>

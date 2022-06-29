<script>
	import Accordion from './Accordion.svelte';
	import AccordionItem from './AccordionItem.svelte';
	import Icon from './Icon.svelte';
	let key = 'a';
</script>

<svelte:head>
	<title>Public Rec Careers | Designer</title>
</svelte:head>

<div class="text-black">
	<div class="container hidden sm:flex flex-grow justify-between">
		<div class="sm:w-7/12">
			<h1 class="text-[24px] sm:text-[48px] mb-5">Designer</h1>
			<h3 class="text-[20px] sm:text-[28px]">Overview</h3>
			<p class="text-[16px] sm:text-[20px] mt-3">
				We’re seeking a Designer to join our creative team. Reporting to our Executive Creative Director and Design Lead, this role will contribute to a wide range of design projects and support our Marketing department. The right candidate will have a keen eye and passion for design and design thinking, a commitment to excellence, and a desire to grow beyond their comfort zone
				<br />
				<br />
				As a Designer, you are able to develop original concepts as well as work within established brand guidelines and design systems to execute beautiful, functional designs.
			</p>
			<br />
			<br />
			<a
				class="mt-8"
				href="https://jobs.gusto.com/postings/public-rec-designer-79b2c412-5d8b-4822-b1c0-92b2999db61b/applicants/new"
			>
				<button
					class="h-12 px-6 text-white bg-black transition-colors duration-150 rounded-full
				focus:shadow-outline"
				>
					Apply Now
				</button>
			</a>

			<h3 class="text-[20px] sm:text-[28px] mt-10">Minimum Requirements</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">2-3 years of professional design experience, preferably in consumer brands or ad agencies.
</li>
				<li class="pt-2">
					A portfolio of work that demonstrates thoughtful, compelling work you’re proud of.
				</li>
				<li class="pt-2">
					A background in visual or UX design is required.
				</li>
				<li class="pt-2">
					Excellent communication skills and meticulous attention to detail.
				</li>
				<li class="pt-2">A true generalist with experience in UX Design, social media and community management, video editing, and ad design.
				</li>
				<li class="pt-2">
					Fluency in Figma and Adobe Creative Suite. AfterEffects proficiency is a bonus.
				</li>
				<li class="pt-2">
					A passion for design and collaboration with other creatives.
				</li>
				<li class="pt-2">
					An enthusiastic and curious mindset for continuous improvement.
				</li>
			</ul>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Responsibilities</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">
					Work with our creative team to develop digital and print campaigns and design assets across a broad range of media including websites, social media, paid social ads, and other marketing materials
				</li>
				<li class="pt-2">
					Contribute to campaign ideation and be able to apply creative direction in your designs throughout the project lifecycle
				</li>
				<li class="pt-2">
					Work collaboratively with creative team members, but have the ability to work proactively and independently with minimal supervision
				</li>
			</ul>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Ready to Apply?</h3>
			<p class="text-[16px] sm:text-[20px] mt-3">
				We are committed to building a diverse and inclusive environment at Public Rec.
			</p>
			<br /><br />
			<a
				class="mt-8"
				href="https://jobs.gusto.com/postings/public-rec-designer-79b2c412-5d8b-4822-b1c0-92b2999db61b/applicants/new"
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
		<h1 class="text-[24px] sm:text-[48px] mb-5">Designer</h1>
		<hr class="my-5" />
		<Accordion bind:key>
			<AccordionItem key="a">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Overview</h3>
				<Icon isOpen={true} slot="button" />
				<p class="text-[16px] sm:text-[20px] mt-3" slot="body">
					We’re seeking a Designer to join our creative team. Reporting to our Executive Creative Director and Design Lead, this role will contribute to a wide range of design projects and support our Marketing department. The right candidate will have a keen eye and passion for design and design thinking, a commitment to excellence, and a desire to grow beyond their comfort zone.
					<br />
					<br />
					As a Designer, you are able to develop original concepts as well as work within established brand guidelines and design systems to execute beautiful, functional designs.
				</p>
				<br />

				<a
					class="mt-8"
					href="https://jobs.gusto.com/postings/public-rec-designer-79b2c412-5d8b-4822-b1c0-92b2999db61b/applicants/new"
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
		<Accordion>
			<AccordionItem key="b">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Minimum Requirements</h3>
				<Icon isOpen={false} slot="button" />
				<ul
					class="sm:max-w-[553px] text-[16px] sm:text-[20px] list-disc list-inside font-light
					leading-8 sm:leading-9 mt-3"
					slot="body"
				>
					<li class="pt-2">2-3 years of professional design experience, preferably in consumer brands or ad agencies.
</li>
				<li class="pt-2">
					A portfolio of work that demonstrates thoughtful, compelling work you’re proud of.
				</li>
				<li class="pt-2">
					A background in visual or UX design is required.
				</li>
				<li class="pt-2">
					Excellent communication skills and meticulous attention to detail.
				</li>
				<li class="pt-2">A true generalist with experience in UX Design, social media and community management, video editing, and ad design.
				</li>
				<li class="pt-2">
					Fluency in Figma and Adobe Creative Suite. AfterEffects proficiency is a bonus.
				</li>
				<li class="pt-2">
					A passion for design and collaboration with other creatives.
				</li>
				<li class="pt-2">
					An enthusiastic and curious mindset for continuous improvement.
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
					Work with our creative team to develop digital and print campaigns and design assets across a broad range of media including websites, social media, paid social ads, and other marketing materials
				</li>
				<li class="pt-2">
					Contribute to campaign ideation and be able to apply creative direction in your designs throughout the project lifecycle
				</li>
				<li class="pt-2">
					Work collaboratively with creative team members, but have the ability to work proactively and independently with minimal supervision
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

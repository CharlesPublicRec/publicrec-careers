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
	<title>Public Rec Careers | Senior Designer</title>
</svelte:head>

<div class="text-black">

	<div class="container hidden sm:flex flex-grow justify-between">
		<div class="sm:w-7/12">
			<h1 class="text-[24px] sm:text-[48px] mb-5">Senior Designer</h1>
			<h3 class="text-[20px] sm:text-[28px]">Overview</h3>
			<p class="text-[16px] sm:text-[20px] mt-3">
				We’re seeking a Senior Designer to join our creative team. Reporting to our Executive
				Creative Director, this role will contribute to a wide range of design projects across a
				broad range of media. The right candidate will have a keen eye and passion for design and
				design thinking, a commitment to excellence, and a desire to grow beyond their comfort zone.
				<br />
				<br />
				As a Senior Designer, you are able to develop original concepts as well as work within
				established brand guidelines and design systems to execute beautiful, functional designs.
				<br />
				<br />
				This is a full-time role based in Los Angeles or Chicago, with a flexible Work From Home
				model.
			</p>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Responsibilities</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">
					Work with our creative team to develop digital and print campaigns and design assets
					across a broad range of media including websites, campaigns, marketing materials, brand
					and identity systems, and more.
				</li>
				<li class="pt-2">
					Contribute to campaign ideation and be able to apply creative direction in your designs
					throughout the project lifecycle
				</li>
				<li class="pt-2">
					Work collaboratively with creative team members, but have the ability to work
					independently with minimal supervision
				</li>
			</ul>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Minimum Requirements</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">
					3-5 years professional design experience, preferably in consumer brands or interactive
					design agencies.
				</li>
				<li class="pt-2">
					A portfolio of work that demonstrates thoughtful, compelling work you’re proud of.
				</li>
				<li class="pt-2">A background in visual or UX design is required.</li>
				<li class="pt-2">Excellent communication skills and meticulous attention to detail.</li>
				<li class="pt-2">
					Experience with or a background in UX Design and Copywriting are helpful, but not
					required.
				</li>
				<li class="pt-2">
					Fluency in Figma and Adobe Creative Suite. After Effects proficiency is a bonus.
				</li>
				<li class="pt-2">A passion for design and collaboration with other creatives.</li>
				<li class="pt-2">
					A dedication to creating an elevated customer experience at all touch points, led by
					empathy.
				</li>
				<li class="pt-2">An enthusiastic and curious mindset for continuous improvement.</li>
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
		<h1 class="text-[24px] sm:text-[48px] mb-5">Senior Designer</h1>
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
					We’re seeking a Senior Designer to join our creative team. Reporting to our Executive
					Creative Director, this role will contribute to a wide range of design projects across a
					broad range of media. The right candidate will have a keen eye and passion for design and
					design thinking, a commitment to excellence, and a desire to grow beyond their comfort
					zone.
					<br />
					<br />
					As a Senior Designer, you are able to develop original concepts as well as work within
					established brand guidelines and design systems to execute beautiful, functional designs.
					<br />
					<br />
					This is a full-time role based in Los Angeles or Chicago, with a flexible Work From Home
					model.
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
					<li class="pt-2">
						Work with our creative team to develop digital and print campaigns and design assets
						across a broad range of media including websites, campaigns, marketing materials, brand
						and identity systems, and more.
					</li>
					<li class="pt-2">
						Contribute to campaign ideation and be able to apply creative direction in your designs
						throughout the project lifecycle
					</li>
					<li class="pt-2">
						Work collaboratively with creative team members, but have the ability to work
						independently with minimal supervision
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
						3-5 years professional design experience, preferably in consumer brands or interactive
						design agencies.
					</li>
					<li class="pt-2">
						A portfolio of work that demonstrates thoughtful, compelling work you’re proud of.
					</li>
					<li class="pt-2">A background in visual or UX design is required.</li>
					<li class="pt-2">Excellent communication skills and meticulous attention to detail.</li>
					<li class="pt-2">
						Experience with or a background in UX Design and Copywriting are helpful, but not
						required.
					</li>
					<li class="pt-2">
						Fluency in Figma and Adobe Creative Suite. After Effects proficiency is a bonus.
					</li>
					<li class="pt-2">A passion for design and collaboration with other creatives.</li>
					<li class="pt-2">
						A dedication to creating an elevated customer experience at all touch points, led by
						empathy.
					</li>
					<li class="pt-2">An enthusiastic and curious mindset for continuous improvement.</li>
				</ul>
			</AccordionItem>
		</Accordion>

	</div>

</div>

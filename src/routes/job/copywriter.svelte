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
	<title>Public Rec Careers | Copywriter</title>
</svelte:head>

<div class="text-black">

	<div class="container hidden sm:flex flex-grow justify-between">
		<div class="sm:w-7/12">
			<h1 class="text-[24px] sm:text-[48px] mb-5">Copywriter</h1>

			<h3 class="text-[20px] sm:text-[28px]">Overview</h3>
			<p class="text-[16px] sm:text-[20px] mt-3">
				We’re seeking a Copywriter to write daily brand communications including email, web, video,
				and social (organic and paid).
				<br />
				<br />
				This person will work with our internal creative team to develop compelling and engaging
				creative weekly. The ideal candidate has 2-4 years of copywriting experience and is not
				afraid of a fast-paced, startup environment.
				<br />
				<br />
				This role will start with a 3-month contract and has potential for a full-time hire after
				that. Our team utilizes a hybrid model and there’s flexibility for in-office and remote
				work, but candidates must be in or planning to relocate to Chicago or Los Angeles.
				<br />
				<br />
				We’re hiring for Junior Copywriter, Copywriter, and Senior Copywriter roles.
				<br />
				<br />
				We are committed to building a diverse and inclusive environment at Public Rec.
				<br />
				<br />
				<a
					class="mt-8"
					href="https://jobs.gusto.com/postings/public-rec-copywriter-f015cb6c-2263-4e7b-ba95-0d4950c61c96/applicants/new">
					<button
						class="h-12 px-6 text-white bg-black transition-colors duration-150 rounded-2xl
						focus:shadow-outline">
						Apply
					</button>

				</a>
			</p>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Responsibilities</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">
				<li class="pt-2">
					Write effective, engaging copy across email, web, video, and social (organic and paid).
				</li>
				<li class="pt-2">
					Partner with designers, photographers, and directors to deliver strategic and compelling
					creative.
				</li>
				<li class="pt-2">Ideate and concept campaign ideas for social and email.</li>
				<li class="pt-2">Demonstrate organizational skills and consistently meet deadlines.</li>
			</ul>
			<h3 class="text-[20px] sm:text-[28px] mt-10">Minimum Requirements</h3>
			<ul class="text-[16px] sm:text-[20px] list-disc list-inside leading-8 mt-5">

				<li class="pt-2">
					2-4 years copywriting experience at an agency, in-house, or freelance. Experience with
					E-comm and/or direct response marketing is preferred but not necessary.
				</li>
				<li class="pt-2">
					Experience understanding and emulating brand voice. Ability to flex brand tone for various
					mediums including email, web, video, and social (organic and paid).
				</li>
				<li class="pt-2">Ability to combine conceptual creative thinking with content delivery.</li>
				<li class="pt-2">Self-starter who is motivated, resourceful, and well organized.</li>
				<li class="pt-2">Ability to edit for grammar and spelling.</li>
				<li class="pt-2">Must include a digital portfolio of previous work.</li>
			</ul>

			<a
				class="text-[16px] sm:text-[20px]"
				href="https://jobs.gusto.com/postings/public-rec-copywriter-f015cb6c-2263-4e7b-ba95-0d4950c61c96/applicants/new">
				<button
					class="h-12 mt-8 px-6 text-white bg-black transition-colors duration-150 rounded-2xl
					focus:shadow-outline">
					Apply
				</button>

			</a>
		</div>

	</div>
	<div class="sm:hidden">
		<h1 class="text-[24px] sm:text-[48px] mb-5">Copywriter</h1>

		<Accordion bind:key>
			<AccordionItem key="a">
				<h3 class="text-[20px] sm:text-[28px]" slot="header">Overview</h3>
				<Icon isOpen={true} slot="button" />
				<p class="text-[16px] sm:text-[20px] mt-3" slot="body">
					We’re seeking a Copywriter to write daily brand communications including email, web,
					video, and social (organic and paid).
					<br />
					<br />
					This person will work with our internal creative team to develop compelling and engaging
					creative weekly. The ideal candidate has 2-4 years of copywriting experience and is not
					afraid of a fast-paced, startup environment.
					<br />
					<br />
					This role will start with a 3-month contract and has potential for a full-time hire after
					that. Our team utilizes a hybrid model and there’s flexibility for in-office and remote
					work, but candidates must be in or planning to relocate to Chicago or Los Angeles.
					<br />
					<br />
					We’re hiring for Junior Copywriter, Copywriter, and Senior Copywriter roles.
					<br />
					<br />
					We are committed to building a diverse and inclusive environment at Public Rec.
					<br />
					<br />
					<a
						class="mt-8"
						href="https://jobs.gusto.com/postings/public-rec-copywriter-f015cb6c-2263-4e7b-ba95-0d4950c61c96/applicants/new">
						<button
							class="h-12 px-6 text-white bg-black transition-colors duration-150 rounded-2xl
							focus:shadow-outline">
							Apply
						</button>

					</a>

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
						Write effective, engaging copy across email, web, video, and social (organic and paid).
					</li>
					<li class="pt-2">
						Partner with designers, photographers, and directors to deliver strategic and compelling
						creative.
					</li>
					<li class="pt-2">Ideate and concept campaign ideas for social and email.</li>
					<li class="pt-2">Demonstrate organizational skills and consistently meet deadlines.</li>
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
						2-4 years copywriting experience at an agency, in-house, or freelance. Experience with
						E-comm and/or direct response marketing is preferred but not necessary.
					</li>
					<li class="pt-2">
						Experience understanding and emulating brand voice. Ability to flex brand tone for
						various mediums including email, web, video, and social (organic and paid).
					</li>
					<li class="pt-2">
						Ability to combine conceptual creative thinking with content delivery.
					</li>
					<li class="pt-2">Self-starter who is motivated, resourceful, and well organized.</li>
					<li class="pt-2">Ability to edit for grammar and spelling.</li>
					<li class="pt-2">Must include a digital portfolio of previous work.</li>

				</ul>

			</AccordionItem>
		</Accordion>

	</div>

</div>

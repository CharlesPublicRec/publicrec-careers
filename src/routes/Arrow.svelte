<script>
	var icons;

	icons = {
		arrowLeft:
			'M1.00003 4.93092L5.12256 8.93616C5.21089 9.02197 5.35327 9.02117 5.44059 8.93438C5.52791 8.84758 5.52709 8.70766 5.43877 8.62185L1.7791 5.0663L18.9085 5.0663C19.0327 5.0663 19.1334 4.96736 19.1334 4.8453C19.1334 4.72325 19.0327 4.62431 18.9085 4.62431L1.97827 4.62431L5.43594 1.38085C5.52578 1.29658 5.52909 1.15669 5.44334 1.0684C5.35758 0.980117 5.21523 0.976864 5.12539 1.06114L1.00003 4.93092Z',
		arrowRight:
			'M35 8.62952L27.2702 1.1197C27.1046 0.958803 26.8377 0.960302 26.674 1.12304C26.5102 1.28579 26.5118 1.54814 26.6774 1.70903L33.5392 8.37569L1.42165 8.37569C1.18878 8.37569 1 8.56121 1 8.79005C1 9.0189 1.18878 9.20442 1.42165 9.20442L33.1658 9.20442L26.6827 15.2859C26.5142 15.4439 26.508 15.7062 26.6688 15.8717C26.8296 16.0373 27.0965 16.0434 27.2649 15.8854L35 8.62952Z'
	};

	export let id = undefined;
	export let width = 20;
	export let height = 20;
	// export let size = 20; // px
	export let icon = 'empty'; // just an empty square, can be placeholder
	export let classes = undefined;
	export let style = undefined;
	export let fill = undefined;
	export let stroke = undefined;
	export let viewBox = undefined;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	{viewBox}
	{stroke}
	{id}
	{style}
	class={classes}>
	<path d={icons[icon]} {fill} />
</svg>

<script>
	import Logo from './Logo.svelte';
	function linkHandler(event) {}
</script>

<div class="flex justify-between">
	<Logo />
	<ul class="flex items-center">
		<li>
			<a
				class="text-[#fefefe] text-2xl hover:underline font-semibold"
				href="/"
				on:click|preventDefault={linkHandler}>About</a
			>
		</li>
		<li>
			<a
				class="text-[#fefefe] text-2xl hover:underline font-semibold"
				href="/"
				on:click|preventDefault={linkHandler}>Contact</a
			>
		</li>
	</ul>
</div>

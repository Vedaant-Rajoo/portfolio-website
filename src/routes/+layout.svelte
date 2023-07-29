<script>
	import '../app.postcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>
<Navbar let:hidden let:toggle rounded color="primary">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">VR</span>
	</NavBrand>
	<NavHamburger on:click={toggle}/>

	<NavUl {hidden}>
		<NavLi href="/" activeClass="self-center text-red-700" active={true}>
			Home
		</NavLi>
		<NavLi href="/blog" class="self-center">
			Blog
		</NavLi>
		<NavLi href="/">About</NavLi>
		<NavLi href="/">Contact</NavLi>
	</NavUl>
</Navbar>

<slot />

<style>

</style>
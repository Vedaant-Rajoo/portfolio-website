<script>
	import Home1 from "$lib/components/Home1.svelte";
    import SectionSeparator from "$lib/components/SectionSeparator.svelte";
    import PaginationD from "$lib/components/PaginationD.svelte";
    let currentPage = 1;
    const maxPages = 2;
    function goLeft() {
        currentPage = currentPage === 1 ? maxPages : currentPage - 1;
    }
    function goRight() {
        currentPage = currentPage === maxPages ? 1 : currentPage + 1;
    }
</script>

{#if currentPage === 1}
    <Home1 class="m-2"/>
{:else if currentPage === 2}
    <SectionSeparator/>
{/if}

<PaginationD class="m-2" on:left = {goLeft} on:right = {goRight}/>


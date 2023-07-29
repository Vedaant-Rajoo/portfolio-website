<script>
	import { Card, Heading } from "flowbite-svelte";

	export let data;
</script>


<Heading tag="h1" class="m-5" color='text-blue-800 dark:text-white'>
    Blog Posts
</Heading>
{#if data}
        {#each data.summary as blog}
                <div class="pb-5 m-5">
                    <Card href="/blog/{blog.slug}">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight">{blog.title}</h5>
                    </Card>
                </div>
        {/each}
     
{/if}

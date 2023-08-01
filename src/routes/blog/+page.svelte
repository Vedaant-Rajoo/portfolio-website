<script>
	import { Card, Heading } from "flowbite-svelte";
    import '../../app.postcss';
	import BlogHero from "$lib/components/icon/BlogHero.svelte";
	import HeroPost from "$lib/components/HeroPost.svelte";
</script>

<div class="m-10 pl-5 pr-5 w-full ml-auto mr-auto box-border md:max-w-xl sm:max-w-lg">
    <BlogHero />
    <HeroPost title="HJ" url="https://miro.medium.com/v2/resize:fit:1200/1*YmhQpD6BIT5urZlZ2PPwmw.jpeg" date="2023-07-29T16:38:24.163818+00:00" desc="This is the desc" slug="hello-there"/>
</div>

<!-- {#if data}
        {#each data.blogs as blog}
                <div class="pb-5 m-5">
                    <Card href="/blog/{blog.slug}">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight">{blog.title}</h5>
                    </Card>
                </div>
        {/each}
        {:else}
                <Heading>Loading...</Heading>
{/if} -->

<script>
    import '../../app.postcss';
	import BlogHero from "$lib/components/icon/BlogHero.svelte";
	import HeroPost from "$lib/components/HeroPost.svelte";
	import Container from '$lib/components/Container.svelte';
	import MoreStories from '$lib/components/MoreStories.svelte';
	import SectionSeparator from '$lib/components/SectionSeparator.svelte';
    export let data;
    const heroPost = data.blogs[0];
    const morePosts = data.blogs.slice(1);
</script>

<svelte:head>
    <title>Vedaant's Blog </title>
    <meta name="description" content="Vedaant's Blog" />
</svelte:head>
<Container>
    <BlogHero />
    {#if heroPost}
        <HeroPost
            title={heroPost.title}
            url={heroPost.imgUrl}
            date={heroPost.updatedAt}
            slug={heroPost.slug}
            desc={heroPost.desc}
            />
    {/if}
    <SectionSeparator />
    {#if morePosts.length > 0}
        <MoreStories blogs={morePosts} />
    {/if}
</Container>





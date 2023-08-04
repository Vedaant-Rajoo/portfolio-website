<script>
    import PostPreview from "./PostPreview.svelte";
    export let blogs;
</script>

<section>
    <h2 class="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight ">
        More Stories
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {#each blogs as blog (blog.slug)}
            <PostPreview title={blog.title} imgUrl={blog.imgUrl} updatedAt={blog.updatedAt} desc={blog.desc} slug={blog.slug}/>
        {/each}
    </div>
</section>


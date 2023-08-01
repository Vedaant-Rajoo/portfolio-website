<script>
    export let title;
    export let url;
    export let slug;
</script>

<div class="sm:mx-0">
    {#if slug}
        <a href={`/blog/${slug}`} aria-label={title}>
            <img src={url} alt={title} class="hover:shadow-md transition-shadow duration-200" width="2000" height="1000"/>
        </a>
    {:else}
        <img src={url} alt={title} width="2000" height="1000"/>
    {/if}
</div>
<script>
    import CoverImage from './CoverImage.svelte';
    import Date from './Date.svelte';
    export let title;
    export let url;
    export let date;
    export let desc;
    export let slug;
</script>

<section class="mt-8">
    <div>
        <CoverImage {title} {url} {slug} />
    </div>
    <div class="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28 mt-8">
        <div>
            <h3 class="mb-4 text-4xl leading-tight lg:text-6xl">
                <a href={`/blog/${slug}`} class="hover:underline">
                   {title} 
                </a>
            </h3>
            <div class="mb-4 text-lg md:mb-0">
                <Date dateString={date} />
            </div>
        </div>
        <div>
            <p class="mb-4 text-lg leading-relaxed">{desc}</p>
        </div>
    </div>
</section>
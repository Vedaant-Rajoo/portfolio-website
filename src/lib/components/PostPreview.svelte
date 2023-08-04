<script>
    import CoverImage from "./CoverImage.svelte";
	import Date from "./Date.svelte";
    export let title;
    export let imgUrl;
    export let updatedAt;
    export let desc;
    export let slug;
</script>

<div>
    <div class="mb-5">
        <CoverImage title={title} url={imgUrl} slug={slug} />
    </div>
    <h3 class="mb-3 text-3xl leading-snug">
        <a href={`/blog/${slug}`} class="hover:underline">{title}</a>
    </h3>
    <div class="mb-4 text-lg">
        <Date dateString={updatedAt} />
    </div>
    <p class="mb-4 text-lg leading-relaxed">{desc}</p>
</div>
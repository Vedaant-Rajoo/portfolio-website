<script>
    export let data;
    import Markdown from '$lib/components/Markdown.svelte';
</script>
<h1>{data.post.title}</h1>
<div>
    <Markdown markdown={data.post.body} />
</div>
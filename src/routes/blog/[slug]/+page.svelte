<script>
    export let data;
    import { Heading } from 'flowbite-svelte';
    import Markdown from '$lib/components/Markdown.svelte';
</script>
<Heading tag="h2" class="m-5" color='text-blue-800 dark:text-white'>
    {data.post.title}
</Heading>
<div>
    <Markdown markdown={data.post.body} />
</div>
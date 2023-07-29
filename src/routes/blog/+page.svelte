<script>
	export let data;
</script>


<h1>Blog Posts</h1>
{#if data}
    <ul>
        {#each data.summary as blog}
            <li>
                <div>
                    <a href="/blog/{blog.slug}">{blog.title}</a>
                </div>
            </li>
        {/each}
    </ul> 
{/if}

<style>
    div{
        border: 1px solid #ccc;
        background-color: aliceblue;
        padding: 10px;
    }
    div > a{
        font-family: cursive;
        font-size: large;
        color: #333;
    }
</style>
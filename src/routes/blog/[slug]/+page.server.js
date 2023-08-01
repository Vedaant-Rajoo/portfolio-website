import { getPosts } from '$lib/graphql-client.js';
export async function load({ params}) {
    const posts = await getPosts();
    if (!posts) {
        return {
            status: 404,
            error: new Error("Posts not found"),
        };
    }
    else{
        const post = posts.find((post) => post.slug === params.slug);
        return {post}
    }
}
import { getPosts } from "$lib/utils";

export async function load({ params}) {
    const posts = await getPosts();
    if (!posts) {
        return {
            status: 404,
            error: new Error("Posts not found"),
        };
    }
    else{
        // @ts-ignore
        const post = posts.find((post) => post.slug === params.slug);
        return {post}
    }
}
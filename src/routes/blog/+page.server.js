import { getPosts } from "$lib/utils";

export async function load() {
    const posts = await getPosts();
    if (!posts) {
        return {
            status: 404,
            error: new Error("Posts not found"),
        };
    }
    else{
    return {
        // @ts-ignore
        summary: posts.map((/** @type {{ title: any; slug: any; updatedAt: any; }} */ post) => ({
            title: post.title,
            slug: post.slug,
            updatedAt: post.updatedAt,
        })),
    };
}
}
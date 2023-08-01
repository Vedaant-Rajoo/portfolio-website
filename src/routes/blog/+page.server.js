import {getPosts} from '$lib/graphql-client'

export async function load() {
    const posts = await getPosts();
    if (!posts) {
        return {
            status: 404,
            error: new Error("Posts not found"),
        };
    }
    else return posts;

}
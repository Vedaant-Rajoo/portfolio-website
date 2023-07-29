import { client } from "$lib/graphql-client";
import { GET_BLOGS } from "$lib/graphql-queries";
export async function _loadPageData(){
    try{
        const data = await load();
        return data;
    } catch(error){
        console.log("Error fetching projects");
        return {props: {blogs:null,}};
    }
}
export async function load(){
    try{
    const blogs = await client.request(GET_BLOGS);
    return {
        props: {
            blogs
        },
    }
} catch(error){
    console.log("Error fetching projects");
    return {
        props: {
            blogs:null,
        }
    };
  }
}

export async function getPosts(){
    try{
        let posts = await _loadPageData();
        posts = posts.props.blogs.blogs;
        return posts;
    } catch(error){
        console.log("Error fetching projects");
    }   
}
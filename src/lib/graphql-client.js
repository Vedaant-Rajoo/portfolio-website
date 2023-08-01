import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API
const GRAPHQL_TOKEN = import.meta.env.VITE_GRAPHQL_TOKEN

const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
    headers: 
    { 
        Authorization: `Bearer ${GRAPHQL_TOKEN}` 
    },
});

const GET_BLOGS = gql`
    {
        blogs(orderBy: createdAt_DESC, first: 20){
            title
            body
            slug
            desc
            updatedAt
            imgUrl
        }
    }
`;

async function load(){
    try{
    const blogs = await client.request(GET_BLOGS);
    return blogs
    
    } catch(error){
        console.log("Error fetching projects!!");
        return {blogs:null};
  }
}

export async function getPosts(){
    let posts = await load();
    return posts;  
}
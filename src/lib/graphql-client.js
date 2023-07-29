import { GraphQLClient } from "graphql-request";
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API
const GRAPHQL_TOKEN = import.meta.env.VITE_GRAPHQL_TOKEN

export const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
    headers: 
    { 
        Authorization: `Bearer ${GRAPHQL_TOKEN}` 
    },
});
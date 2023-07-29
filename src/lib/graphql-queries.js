import { gql } from "graphql-request";

export const GET_BLOGS = gql`
    query getBlogs {
        blogs{
            title
            body
            slug
            updatedAt
        }
    }
`;

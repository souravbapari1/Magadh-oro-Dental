"use server";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { BlogPostsConnectionData } from "./blogs";

const blogs_query = gql`
  query PageInfo($sort: [String], $pagination: PaginationArg) {
    blogPosts_connection(sort: $sort, pagination: $pagination) {
      pageInfo {
        total
        pageSize
        pageCount
        page
      }
      nodes {
        title
        slug
        description
        createdAt
        blog_category {
          category_name
        }
        image {
          url
        }
        documentId
      }
    }
  }
`;

export const getBlogs = async ({ page }: { page: number }) => {
  const data = await client.query<BlogPostsConnectionData>({
    query: blogs_query,
    variables: {
      pagination: {
        page: page,
        pageSize: 9,
      },
      sort: ["publishedAt:desc"],
    },
  });
  return data.data;
};

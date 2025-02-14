import client from "@/graphql/client";
import { gql } from "@apollo/client";
import type { MetadataRoute } from "next";

export default async function sitemap() {
  const data = await client.query({
    query: gql`
      query BlogPosts {
        blogPosts {
          slug
          publishedAt
        }
      }
    `,
  });
  return data.data.blogPosts.map((post: any) => ({
    url: `https://magadhorodental.com/blogs/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "daily",
    priority: 1,
  }));
}

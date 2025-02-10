"use client";
import BlogCard from "@/components/layout/BlogCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useQuery } from "@tanstack/react-query";

import { strApi } from "@/graphql/client";
import { Loader2 } from "lucide-react";
import React from "react";
import { getBlogs } from "./functions";
import { getFormattedDate } from "@/lib/utils";

function BlogsList() {
  const [page, setPage] = React.useState(1);

  const data = useQuery({
    queryKey: ["blogs", page],
    queryFn: async () => await getBlogs({ page }),
  });

  if (data.isLoading) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <Loader2 className="animate-spin text-primary" size={50} />
      </div>
    );
  }

  if (data.isError) {
    return <div>Error: {data.error.message}</div>;
  }

  if (!data.data?.blogPosts_connection.nodes.length) {
    return (
      <div className="flex justify-center items-center text-center h-96">
        <p>No Blogs found</p>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {data.data?.blogPosts_connection.nodes.map((blog) => (
          <BlogCard
            title={blog.title}
            description={blog.description}
            image={strApi + blog.image.url}
            link={`/blogs/${blog.slug}`}
            key={blog.documentId}
            category={blog.blog_category.category_name}
            date={getFormattedDate(blog.createdAt)}
          />
        ))}
      </div>
      <div className="py-10 mt-10">
        {data.data && data.data.blogPosts_connection.pageInfo.pageCount > 1 && (
          <Pagination>
            <PaginationContent>
              {page > 1 && (
                <PaginationItem
                  className="cursor-pointer"
                  onClick={() => setPage(page - 1)}
                >
                  <PaginationPrevious />
                </PaginationItem>
              )}
              {Array(data.data?.blogPosts_connection.pageInfo.pageCount)
                .fill(0)
                .map((_, index) => (
                  <PaginationItem
                    className={
                      page === index + 1
                        ? "bg-primary text-white rounded-lg"
                        : ""
                    }
                    key={index}
                    onClick={() => setPage(index + 1)}
                  >
                    <PaginationLink>{index + 1}</PaginationLink>
                  </PaginationItem>
                ))}
              {page < data.data?.blogPosts_connection.pageInfo.pageCount && (
                <PaginationItem
                  onClick={() => setPage(page + 1)}
                  className="cursor-pointer"
                >
                  <PaginationNext />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}

export default BlogsList;

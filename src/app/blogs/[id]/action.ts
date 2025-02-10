"use server";

import client from "@/graphql/client";
import { gql } from "@apollo/client";

export const addComment = async (data: {
  blog_id: string;
  name: string;
  email: string;
  comment: string;
}) => {
  const req = await client.mutate({
    mutation: gql`
      mutation CreateCommentsList($data: CommentsListInput!) {
        createCommentsList(data: $data) {
          comment
          blog_id
          email
          name
        }
      }
    `,
    variables: {
      data,
    },
  });
  return req.data;
};

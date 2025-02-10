import { Card, CardContent, CardHeader } from "@/components/ui/card";
import client from "@/graphql/client";
import { getFormattedDate } from "@/lib/utils";
import { gql } from "@apollo/client";
import { MdErrorOutline } from "react-icons/md";
import NewComment from "./NewComment";

const COMMENT_QUERY = gql`
  query Comments($filters: CommentsListFiltersInput) {
    comments(filters: $filters) {
      documentId
      name
      comment
      createdAt
    }
  }
`;

async function BlogComment({ id }: { id: string }) {
  const { data } = await client.query<{
    comments: {
      documentId: string;
      name: string;
      comment: string;
      createdAt: string;
    }[];
  }>({
    query: COMMENT_QUERY,
    variables: {
      filters: {
        blog_id: {
          eq: id,
        },
      },
    },
  });

  return (
    <div className="container py-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="">
          <div className="flex-col gap-5 flex">
            {data.comments.length == 0 && (
              <div className="flex justify-center gap-5 items-center text-center h-96 flex-col rounded-3xl">
                <MdErrorOutline size={40} color="red" />
                <p>No Comments found</p>
              </div>
            )}
            {data.comments.map((e, index) => (
              <Card
                className="shadow-none border-none bg-gray-400/5"
                key={e.documentId}
              >
                <CardHeader>
                  <h5 className="text-xl font-bold">{e.name}</h5>
                  <p className="text-sm">
                    Date: {getFormattedDate(e.createdAt)}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">{e.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <NewComment id={id} />
      </div>
    </div>
  );
}

export default BlogComment;

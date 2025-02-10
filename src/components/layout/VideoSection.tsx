import React from "react";
import VideoSlider from "./VideoSlider";
import { gql } from "@apollo/client";
import client from "@/graphql/client";
import { VideosData } from "./interface/videos";
const videos_section = gql`
  query Videos {
    videos {
      createdAt
      documentId
      youtube_video_id
    }
  }
`;

async function VideoSection() {
  const { data } = await client.query<VideosData>({
    query: videos_section,
  });
  return <VideoSlider data={data} />;
}

export default VideoSection;

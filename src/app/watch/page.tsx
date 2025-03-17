import BookNow from "@/components/layout/BookNow";
import ClinicView from "@/components/layout/ClinicView";
import Footer from "@/components/layout/Footer";
import HomeFaqs from "@/components/layout/HomeFaqs";
import PageHeader from "@/components/layout/PageHeader";
import ReviewsSlide from "@/components/layout/ReviewsSlide";
import VideoSection from "@/components/layout/VideoSection";
import { VideoItem } from "@/components/layout/VideoSlider";
import { Button } from "@/components/ui/button";
import client from "@/graphql/client";
import { gql } from "@apollo/client";
import { Metadata } from "next";
import { WatchUsMetaData } from "./watch";
import { TabTitle } from "../constant";
import { VideosData } from "@/components/layout/interface/videos";

const WATCH_META_QUERY = gql`
  query WatchMetaData {
    mataData {
      WatchUsMetaData {
        title
        description
      }
    }
  }
`;

const videos_section = gql`
  query Videos {
    videos {
      createdAt
      documentId
      youtube_video_id
    }
  }
`;

export const metadata = async (): Promise<Metadata> => {
  const metadataResponse = await client.query<WatchUsMetaData>({
    query: WATCH_META_QUERY,
  });

  return {
    title: metadataResponse.data.mataData.WatchUsMetaData.title + TabTitle,
    description: metadataResponse.data.mataData.WatchUsMetaData.description,
  };
};

export const relative = 0;
async function watch() {
  const { data } = await client.query<VideosData>({
    query: videos_section,
  });
  return (
    <div>
      <PageHeader title="Watch Videos" path="Watch" />

      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-6">
          {data.videos.map((video) => {
            return (
              <VideoItem
                video={
                  "https://www.youtube.com/embed/" + video.youtube_video_id
                }
                active={true}
              />
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-6">
          <Button className="mx-auto rounded-full shadow-none px-8 py-5 mt-10 text-center">
            Watch More Videos
          </Button>
        </div>
      </div>
      {/* <HomeFaqs /> */}
      <ReviewsSlide />
      <VideoSection />
      <ClinicView />
      <BookNow />
      <Footer />
    </div>
  );
}

export default watch;

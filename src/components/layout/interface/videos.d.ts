export interface VideosData {
  videos: Video[];
}

export interface Video {
  createdAt: string;
  documentId: string;
  youtube_video_id: string;
}

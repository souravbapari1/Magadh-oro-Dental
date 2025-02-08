export interface HomeHeaderData {
  homeHeader: HomeHeader;
}

export interface HomeHeader {
  top_title: string;
  main_title: string;
  description: string;
  images: Image[];
  youtube_embed_url: string;
  infobar: Infobar[];
}

export interface Image {
  url: string;
}

export interface Infobar {
  content: string;
  title: string;
  id: string;
}

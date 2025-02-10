export interface AboutUsData {
  aboutUs: AboutUs;
}

export interface AboutUs {
  Content: string;
  Images: Image[];
  TextList: TextList[];
  documentId: string;
  basicHeader: BasicHeader;
}

export interface Image {
  url: string;
}

export interface TextList {
  content: string;
  id: string;
}

export interface BasicHeader {
  description: string;
  title: string;
  top_title: string;
}

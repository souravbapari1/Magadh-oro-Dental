export interface AboutUsData {
  aboutUs: AboutUs;
}

export interface AboutUs {
  Content: string;
  Images: Image[];
  doctors: Doctor[];
}

export interface Image {
  url: string;
}

export interface AboutUsMetaData {
  mataData: MataData;
}

export interface MataData {
  AboutUsMetaData: AboutUsMetaData;
}

export interface AboutUsMetaData {
  title: string;
  description: string;
}

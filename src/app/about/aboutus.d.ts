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

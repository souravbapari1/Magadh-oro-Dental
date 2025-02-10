export interface ServicesViewData {
  ourServicesList: OurServicesList;
}

export interface OurServicesList {
  basicHeader: BasicHeader;
  services: Service[];
}

export interface BasicHeader {
  title: string;
  id: string;
  description: string;
  top_title: string;
}

export interface Service {
  service_name: string;
  slug: string;
  description: string;
  image: Image;
  documentId: string;
}

export interface Image {
  url: string;
}

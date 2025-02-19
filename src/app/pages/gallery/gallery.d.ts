export interface GalleryData {
  gallery: Gallery;
  mataData: MataData;
}

export interface Gallery {
  images: Image[];
}

export interface Image {
  url: string;
  name: string;
}

export interface MataData {
  GalleryMetaData: GalleryMetaData;
}

export interface GalleryMetaData {
  title: string;
  description: string;
}

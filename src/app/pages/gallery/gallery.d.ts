export interface GalleryData {
  gallery: Gallery;
}

export interface Gallery {
  images: Image[];
}

export interface Image {
  url: string;
  name: string;
}

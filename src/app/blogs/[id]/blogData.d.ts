export interface BlogPostData {
  blogPosts: BlogPost[];
}

export interface BlogPost {
  publishedAt: string;
  content: string;
  createdAt: string;
  description: string;
  image: Image;
  title: string;
  slug: string;
  documentId: string;
  doctors: Doctor[];
  blog_category: BlogCategory;
  Metadata?: Metadata;
}

export interface Image {
  url: string;
}

export interface Doctor {
  name: string;
  description: string;
  slug: string;
  doctor_image: DoctorImage;
}

export interface DoctorImage {
  url: string;
}

export interface BlogCategory {
  category_name: string;
}

export interface Metadata {
  description: string;
  title: string;
}

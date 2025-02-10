export interface TestimonialData {
  testimonials: Testimonial[];
  reviewsList: ReviewsList;
}

export interface Testimonial {
  review_date: string;
  name: string;
  profile_image: ProfileImage;
  platform_name: string;
  rating: number;
  review_content: string;
  documentId: string;
}

export interface ProfileImage {
  url: string;
}

export interface ReviewsList {
  basicHeader: BasicHeader;
}

export interface BasicHeader {
  description: string;
  title: string;
  id: string;
  top_title: string;
}

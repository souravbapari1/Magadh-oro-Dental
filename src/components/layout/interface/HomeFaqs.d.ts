export interface HomeFaqsData {
  faqSection: FaqSection;
}

export interface FaqSection {
  basicHeader: BasicHeader;
  faqs: Faq[];
  mobile_number: string;
}

export interface BasicHeader {
  description: string;
  id: string;
  title: string;
  top_title: string;
}

export interface Faq {
  answer: string;
  createdAt: string;
  documentId: string;
  publishedAt: string;
  question: string;
  updatedAt: string;
}

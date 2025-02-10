export interface ClinicsData {
  ourClinics: OurClinic[];
  clinicsSection: ClinicsSection;
}

export interface OurClinic {
  branch_address: string;
  branch_index: string;
  contact_email: string;
  contact_number: string;
  documentId: string;
  google_map_link: string;
  google_review_link: string;
  opening_hours: string;
  practo_review_link: string;
  publishedAt: string;
}

export interface ClinicsSection {
  basicHeader: BasicHeader;
}

export interface BasicHeader {
  top_title: string;
  title: string;
  id: string;
  description: string;
}

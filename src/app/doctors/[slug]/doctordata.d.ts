export interface DoctorData {
  doctors: Doctor[];
}

export interface Doctor {
  slug: string;
  position: string;
  name: string;
  before_afters: BeforeAfter[];
  content: string;
  description: string;
  doctor_experience: string;
  doctor_image: DoctorImage;
  documentId: string;
  education: Education[];
  out_and_about: OutAndAbout[];
  social_links: SocialLinks;
}

export interface BeforeAfter {
  after: After;
  before: Before;
  title: string;
}

export interface After {
  url: string;
}

export interface Before {
  url: string;
}

export interface DoctorImage {
  url: string;
}

export interface Education {
  content: string;
  id: string;
}

export interface OutAndAbout {
  id: string;
  content: string;
}

export interface SocialLinks {
  facebook: Facebook;
  google: Google;
  id: string;
  instagram: Instagram;
  linkedin: Linkedin;
  twitter: Twitter;
  youtube: Youtube;
}

export interface Facebook {
  open_on: string;
  link_url: string;
  link_text: string;
  id: string;
}

export interface Google {
  open_on: string;
  link_url: string;
  link_text: string;
  id: string;
}

export interface Instagram {
  open_on: string;
  link_url: string;
  link_text: string;
  id: string;
}

export interface Linkedin {
  open_on: string;
  link_url: string;
  link_text: string;
  id: string;
}

export interface Twitter {
  open_on: string;
  link_url: string;
  link_text: string;
  id: string;
}

export interface Youtube {
  open_on: string;
  link_url: string;
  link_text: string;
  id: string;
}

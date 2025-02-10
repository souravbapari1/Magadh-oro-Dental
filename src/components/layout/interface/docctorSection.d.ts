export interface DoctorsSectionData {
  doctorsSection: DoctorsSection;
}

export interface DoctorsSection {
  basicHeader: BasicHeader;
  doctors: Doctor[];
}

export interface BasicHeader {
  top_title: string;
  id: string;
  description: string;
  title: string;
}

export interface Doctor {
  doctor_experience: string;
  description: string;
  doctor_image: DoctorImage;
  name: string;
  position: string;
  slug: string;
  social_links: SocialLinks;
}

export interface DoctorImage {
  url: string;
}

export interface SocialLinks {
  facebook: Facebook;
  google: Google;
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

export interface TopHeaderData {
  headerTop: HeaderTop;
}

export interface HeaderTop {
  TopBar: TopBar;
}

export interface TopBar {
  Email: string;
  Mobile: string;
  socailLinks: SocailLinks;
}

export interface SocailLinks {
  facebook?: Facebook;
  google?: Facebook;
  instagram?: Instagram;
  linkedin?: Linkedin;
  twitter?: Twitter;
  youtube?: Youtube;
  id: string;
}

export interface Facebook {
  id: string;
  link_text: string;
  link_url: string;
  open_on: string;
}

export interface Instagram {
  id: string;
  link_text: string;
  link_url: string;
  open_on: string;
}

export interface Linkedin {
  id: string;
  link_text: string;
  link_url: string;
  open_on: string;
}

export interface Twitter {
  id: string;
  link_text: string;
  link_url: string;
  open_on: string;
}

export interface Youtube {
  id: string;
  link_text: string;
  link_url: string;
  open_on: string;
}

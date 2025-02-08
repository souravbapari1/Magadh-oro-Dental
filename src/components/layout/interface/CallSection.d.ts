export interface CallSectionData {
  homeHeader: HomeHeader;
}

export interface HomeHeader {
  email: Email;
  timing: Timing;
  call: Call;
}

export interface Email {
  content: string;
  id: string;
  title: string;
}

export interface Timing {
  content: string;
  id: string;
  title: string;
}

export interface Call {
  content: string;
  id: string;
  title: string;
}

export interface termsAndConditionsContentData {
  termsAndConditionsContent: TermsAndConditionsContent;
  mataData: MataData;
}

export interface TermsAndConditionsContent {
  content: string;
}

export interface MataData {
  TermsAndConditionsMetaData: TermsAndConditionsMetaData;
}

export interface TermsAndConditionsMetaData {
  title: string;
  description: string;
}

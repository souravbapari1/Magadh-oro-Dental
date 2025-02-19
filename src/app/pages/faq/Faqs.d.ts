export interface FrequentlyAskedDataTpye {
  faqS: FaqS[];
  mataData: MataData;
}

export interface FaqS {
  answer: string;
  question: string;
  documentId: string;
}

export interface MataData {
  FaqsMetaData: FaqsMetaData;
}

export interface FaqsMetaData {
  description: string;
  title: string;
}

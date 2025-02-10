export interface BeforeAfterData {
  beforeAfters: BeforeAfter[];
}

export interface BeforeAfter {
  title: string;
  after: After;
  before: Before;
  documentId: string;
}

export interface After {
  url: string;
}

export interface Before {
  url: string;
}

export interface ServicesConnectionData {
  services_connection: ServicesConnection;
}

export interface ServicesConnection {
  nodes: Node[];
}

export interface Node {
  slug: string;
  service_name: string;
  image: Image;
  documentId: string;
  description: string;
  content: string;
  ServicesMetadata?: ServicesMetadata;
  before_afters: BeforeAfter[];
}

export interface Image {
  url: string;
}

export interface ServicesMetadata {
  description: string;
  title: string;
}

export interface BeforeAfter {
  title: string;
  after: After;
  before: Before;
}

export interface After {
  url: string;
}

export interface Before {
  url: string;
}

// ServicesConnectionData

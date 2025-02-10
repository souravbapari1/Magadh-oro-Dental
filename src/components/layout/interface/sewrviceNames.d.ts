export interface ServiceNameData {
  services: Service[];
}

export interface Service {
  service_name: string;
  documentId: string;
  slug: string;
}

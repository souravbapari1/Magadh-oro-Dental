export interface OurClinicMetaData {
  mataData: MataData;
}

export interface MataData {
  OurClinicsMetaData: OurClinicsMetaData;
}

export interface OurClinicsMetaData {
  description: string;
  title: string;
}

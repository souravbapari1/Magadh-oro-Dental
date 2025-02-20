export interface DoctorsMetaDataTag {
  mataData: MetaData; // Corrected the interface reference
}

export interface MetaData {
  DoctorsMetaData: DoctorsMetaData;
}

export interface DoctorsMetaData {
  description: string;
  title: string;
}

export interface PriceMetaData {
  mataData: MataData;
}
export interface MataData {
  PricingMetaData: PricingMetaData;
}

export interface PricingMetaData {
  title: string;
  description: string;
}

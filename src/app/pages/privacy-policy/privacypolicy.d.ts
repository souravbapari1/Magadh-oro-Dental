export interface PrivacyPolicyData {
  privacyPolicy: PrivacyPolicy;
  mataData: MataData;
}

export interface PrivacyPolicy {
  content: string;
}

export interface MataData {
  PrivacyPolicyMetadata: PrivacyPolicyMetadata;
}

export interface PrivacyPolicyMetadata {
  description: string;
  title: string;
}

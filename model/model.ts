/** A person related to a one pager. */
export interface OnePagerPerson {
  name: string;
  title: string;
  description?: string;
}

/** Public access one pager data fields. */
export interface OnePagerPublicData {
  companyName: string;
  url: string;
  industryTags: string[];
  briefDescription: string;
  freebieVersion: boolean;
}

/** Full one pager data model. */
export interface OnePagerData {
  companyName: string;
  url: string;
  logo: string;
  industryTags: string[];
  location: string;
  briefDescription: string;
  freebieVersion: boolean;
  detailDescription?: string;
  founders: OnePagerPerson[];
  fundraisingStage?: string;
  fundraisingStageGoal?: number;
  fundsRaisedInStage?: number;
  fundraisingDetails?: string;
  pitchVideoLink?: string;
  investors?: OnePagerPerson[];
  marketStats?: OnePagerStat[];
}

/** Market Stats data model. */
export interface OnePagerStat {
  title: string;
  description?: string;
  amount: number;
  value: string;
}

/** Provider */
export interface ContextProvider {
  paid: boolean;
  makePayment: () => void;
}
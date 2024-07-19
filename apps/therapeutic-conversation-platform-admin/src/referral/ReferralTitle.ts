import { Referral as TReferral } from "../api/referral/Referral";

export const REFERRAL_TITLE_FIELD = "typeField";

export const ReferralTitle = (record: TReferral): string => {
  return record.typeField?.toString() || String(record.id);
};

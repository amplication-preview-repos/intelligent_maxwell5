import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ReferralCreateInput = {
  typeField?: string | null;
  date?: Date | null;
  details?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};

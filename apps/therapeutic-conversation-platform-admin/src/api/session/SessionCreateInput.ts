import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SessionCreateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  notes?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};

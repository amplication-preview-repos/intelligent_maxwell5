import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type SessionUpdateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  notes?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};

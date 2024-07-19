import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type MentalHealthAssessmentCreateInput = {
  score?: number | null;
  date?: Date | null;
  details?: string | null;
  typeField?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};

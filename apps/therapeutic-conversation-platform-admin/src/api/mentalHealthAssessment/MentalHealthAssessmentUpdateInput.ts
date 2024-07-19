import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type MentalHealthAssessmentUpdateInput = {
  score?: number | null;
  date?: Date | null;
  details?: string | null;
  typeField?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};

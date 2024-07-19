import { SortOrder } from "../../util/SortOrder";

export type MentalHealthAssessmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  score?: SortOrder;
  date?: SortOrder;
  details?: SortOrder;
  typeField?: SortOrder;
  userProfileId?: SortOrder;
};

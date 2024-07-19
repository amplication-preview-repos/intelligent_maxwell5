import { SortOrder } from "../../util/SortOrder";

export type ReferralOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
  date?: SortOrder;
  details?: SortOrder;
  userProfileId?: SortOrder;
};

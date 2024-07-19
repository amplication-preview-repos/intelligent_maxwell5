import { SortOrder } from "../../util/SortOrder";

export type ConversationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  content?: SortOrder;
  userProfileId?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  password?: SortOrder;
  location?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  age?: SortOrder;
  gender?: SortOrder;
};

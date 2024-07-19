import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ReferralWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  details?: StringNullableFilter;
  userProfile?: UserProfileWhereUniqueInput;
};

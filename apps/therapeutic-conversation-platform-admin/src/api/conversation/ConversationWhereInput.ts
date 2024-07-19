import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ConversationWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  userProfile?: UserProfileWhereUniqueInput;
};

import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type MentalHealthAssessmentWhereInput = {
  id?: StringFilter;
  score?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  details?: StringNullableFilter;
  typeField?: StringNullableFilter;
  userProfile?: UserProfileWhereUniqueInput;
};

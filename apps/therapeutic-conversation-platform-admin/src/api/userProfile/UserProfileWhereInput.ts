import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ConversationListRelationFilter } from "../conversation/ConversationListRelationFilter";
import { MentalHealthAssessmentListRelationFilter } from "../mentalHealthAssessment/MentalHealthAssessmentListRelationFilter";
import { ReferralListRelationFilter } from "../referral/ReferralListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type UserProfileWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  location?: StringNullableFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  age?: IntNullableFilter;
  gender?: "Option1";
  conversations?: ConversationListRelationFilter;
  mentalHealthAssessments?: MentalHealthAssessmentListRelationFilter;
  referrals?: ReferralListRelationFilter;
  sessions?: SessionListRelationFilter;
};

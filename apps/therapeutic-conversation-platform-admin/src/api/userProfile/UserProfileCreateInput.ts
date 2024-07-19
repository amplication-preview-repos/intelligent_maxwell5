import { ConversationCreateNestedManyWithoutUserProfilesInput } from "./ConversationCreateNestedManyWithoutUserProfilesInput";
import { MentalHealthAssessmentCreateNestedManyWithoutUserProfilesInput } from "./MentalHealthAssessmentCreateNestedManyWithoutUserProfilesInput";
import { ReferralCreateNestedManyWithoutUserProfilesInput } from "./ReferralCreateNestedManyWithoutUserProfilesInput";
import { SessionCreateNestedManyWithoutUserProfilesInput } from "./SessionCreateNestedManyWithoutUserProfilesInput";

export type UserProfileCreateInput = {
  password?: string | null;
  location?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  age?: number | null;
  gender?: "Option1" | null;
  conversations?: ConversationCreateNestedManyWithoutUserProfilesInput;
  mentalHealthAssessments?: MentalHealthAssessmentCreateNestedManyWithoutUserProfilesInput;
  referrals?: ReferralCreateNestedManyWithoutUserProfilesInput;
  sessions?: SessionCreateNestedManyWithoutUserProfilesInput;
};

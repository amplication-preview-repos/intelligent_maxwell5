import { ConversationUpdateManyWithoutUserProfilesInput } from "./ConversationUpdateManyWithoutUserProfilesInput";
import { MentalHealthAssessmentUpdateManyWithoutUserProfilesInput } from "./MentalHealthAssessmentUpdateManyWithoutUserProfilesInput";
import { ReferralUpdateManyWithoutUserProfilesInput } from "./ReferralUpdateManyWithoutUserProfilesInput";
import { SessionUpdateManyWithoutUserProfilesInput } from "./SessionUpdateManyWithoutUserProfilesInput";

export type UserProfileUpdateInput = {
  password?: string | null;
  location?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  age?: number | null;
  gender?: "Option1" | null;
  conversations?: ConversationUpdateManyWithoutUserProfilesInput;
  mentalHealthAssessments?: MentalHealthAssessmentUpdateManyWithoutUserProfilesInput;
  referrals?: ReferralUpdateManyWithoutUserProfilesInput;
  sessions?: SessionUpdateManyWithoutUserProfilesInput;
};

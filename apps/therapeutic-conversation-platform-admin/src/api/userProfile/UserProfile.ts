import { Conversation } from "../conversation/Conversation";
import { MentalHealthAssessment } from "../mentalHealthAssessment/MentalHealthAssessment";
import { Referral } from "../referral/Referral";
import { Session } from "../session/Session";

export type UserProfile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  password: string | null;
  location: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  age: number | null;
  gender?: "Option1" | null;
  conversations?: Array<Conversation>;
  mentalHealthAssessments?: Array<MentalHealthAssessment>;
  referrals?: Array<Referral>;
  sessions?: Array<Session>;
};

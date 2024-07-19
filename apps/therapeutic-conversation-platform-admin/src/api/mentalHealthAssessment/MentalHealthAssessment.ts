import { UserProfile } from "../userProfile/UserProfile";

export type MentalHealthAssessment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number | null;
  date: Date | null;
  details: string | null;
  typeField: string | null;
  userProfile?: UserProfile | null;
};

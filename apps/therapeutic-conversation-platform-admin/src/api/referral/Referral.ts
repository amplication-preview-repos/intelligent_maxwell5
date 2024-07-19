import { UserProfile } from "../userProfile/UserProfile";

export type Referral = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  date: Date | null;
  details: string | null;
  userProfile?: UserProfile | null;
};

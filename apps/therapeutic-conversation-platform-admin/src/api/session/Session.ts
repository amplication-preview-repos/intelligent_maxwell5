import { UserProfile } from "../userProfile/UserProfile";

export type Session = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  notes: string | null;
  userProfile?: UserProfile | null;
};

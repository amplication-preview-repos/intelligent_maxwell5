import { UserProfile } from "../userProfile/UserProfile";

export type Conversation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  content: string | null;
  userProfile?: UserProfile | null;
};

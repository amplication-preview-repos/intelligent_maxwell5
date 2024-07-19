import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ConversationUpdateInput = {
  timestamp?: Date | null;
  content?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};

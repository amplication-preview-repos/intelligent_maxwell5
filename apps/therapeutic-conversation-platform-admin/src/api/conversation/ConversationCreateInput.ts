import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type ConversationCreateInput = {
  timestamp?: Date | null;
  content?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};

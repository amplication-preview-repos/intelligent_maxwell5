import { ConversationWhereUniqueInput } from "./ConversationWhereUniqueInput";
import { ConversationUpdateInput } from "./ConversationUpdateInput";

export type UpdateConversationArgs = {
  where: ConversationWhereUniqueInput;
  data: ConversationUpdateInput;
};

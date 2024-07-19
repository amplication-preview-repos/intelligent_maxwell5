import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConversationModuleBase } from "./base/conversation.module.base";
import { ConversationService } from "./conversation.service";
import { ConversationController } from "./conversation.controller";
import { ConversationResolver } from "./conversation.resolver";

@Module({
  imports: [ConversationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConversationController],
  providers: [ConversationService, ConversationResolver],
  exports: [ConversationService],
})
export class ConversationModule {}

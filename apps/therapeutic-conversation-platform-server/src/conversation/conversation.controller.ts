import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConversationService } from "./conversation.service";
import { ConversationControllerBase } from "./base/conversation.controller.base";

@swagger.ApiTags("conversations")
@common.Controller("conversations")
export class ConversationController extends ConversationControllerBase {
  constructor(
    protected readonly service: ConversationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReferralService } from "./referral.service";
import { ReferralControllerBase } from "./base/referral.controller.base";

@swagger.ApiTags("referrals")
@common.Controller("referrals")
export class ReferralController extends ReferralControllerBase {
  constructor(
    protected readonly service: ReferralService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

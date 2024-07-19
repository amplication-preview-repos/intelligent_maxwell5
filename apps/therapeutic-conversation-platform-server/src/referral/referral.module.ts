import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReferralModuleBase } from "./base/referral.module.base";
import { ReferralService } from "./referral.service";
import { ReferralController } from "./referral.controller";
import { ReferralResolver } from "./referral.resolver";

@Module({
  imports: [ReferralModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReferralController],
  providers: [ReferralService, ReferralResolver],
  exports: [ReferralService],
})
export class ReferralModule {}

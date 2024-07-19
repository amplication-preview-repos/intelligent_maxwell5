import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MentalHealthAssessmentModuleBase } from "./base/mentalHealthAssessment.module.base";
import { MentalHealthAssessmentService } from "./mentalHealthAssessment.service";
import { MentalHealthAssessmentController } from "./mentalHealthAssessment.controller";
import { MentalHealthAssessmentResolver } from "./mentalHealthAssessment.resolver";

@Module({
  imports: [MentalHealthAssessmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [MentalHealthAssessmentController],
  providers: [MentalHealthAssessmentService, MentalHealthAssessmentResolver],
  exports: [MentalHealthAssessmentService],
})
export class MentalHealthAssessmentModule {}

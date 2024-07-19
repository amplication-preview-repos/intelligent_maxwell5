import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MentalHealthAssessmentService } from "./mentalHealthAssessment.service";
import { MentalHealthAssessmentControllerBase } from "./base/mentalHealthAssessment.controller.base";

@swagger.ApiTags("mentalHealthAssessments")
@common.Controller("mentalHealthAssessments")
export class MentalHealthAssessmentController extends MentalHealthAssessmentControllerBase {
  constructor(
    protected readonly service: MentalHealthAssessmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

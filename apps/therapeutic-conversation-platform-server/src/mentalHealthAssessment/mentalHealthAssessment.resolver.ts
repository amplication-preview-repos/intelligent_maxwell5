import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MentalHealthAssessmentResolverBase } from "./base/mentalHealthAssessment.resolver.base";
import { MentalHealthAssessment } from "./base/MentalHealthAssessment";
import { MentalHealthAssessmentService } from "./mentalHealthAssessment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MentalHealthAssessment)
export class MentalHealthAssessmentResolver extends MentalHealthAssessmentResolverBase {
  constructor(
    protected readonly service: MentalHealthAssessmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MentalHealthAssessmentServiceBase } from "./base/mentalHealthAssessment.service.base";

@Injectable()
export class MentalHealthAssessmentService extends MentalHealthAssessmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

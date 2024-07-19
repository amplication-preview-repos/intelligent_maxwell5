/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  UserProfile as PrismaUserProfile,
  Conversation as PrismaConversation,
  MentalHealthAssessment as PrismaMentalHealthAssessment,
  Referral as PrismaReferral,
  Session as PrismaSession,
} from "@prisma/client";

export class UserProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserProfileCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userProfile.count(args);
  }

  async userProfiles(
    args: Prisma.UserProfileFindManyArgs
  ): Promise<PrismaUserProfile[]> {
    return this.prisma.userProfile.findMany(args);
  }
  async userProfile(
    args: Prisma.UserProfileFindUniqueArgs
  ): Promise<PrismaUserProfile | null> {
    return this.prisma.userProfile.findUnique(args);
  }
  async createUserProfile(
    args: Prisma.UserProfileCreateArgs
  ): Promise<PrismaUserProfile> {
    return this.prisma.userProfile.create(args);
  }
  async updateUserProfile(
    args: Prisma.UserProfileUpdateArgs
  ): Promise<PrismaUserProfile> {
    return this.prisma.userProfile.update(args);
  }
  async deleteUserProfile(
    args: Prisma.UserProfileDeleteArgs
  ): Promise<PrismaUserProfile> {
    return this.prisma.userProfile.delete(args);
  }

  async findConversations(
    parentId: string,
    args: Prisma.ConversationFindManyArgs
  ): Promise<PrismaConversation[]> {
    return this.prisma.userProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .conversations(args);
  }

  async findMentalHealthAssessments(
    parentId: string,
    args: Prisma.MentalHealthAssessmentFindManyArgs
  ): Promise<PrismaMentalHealthAssessment[]> {
    return this.prisma.userProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .mentalHealthAssessments(args);
  }

  async findReferrals(
    parentId: string,
    args: Prisma.ReferralFindManyArgs
  ): Promise<PrismaReferral[]> {
    return this.prisma.userProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .referrals(args);
  }

  async findSessions(
    parentId: string,
    args: Prisma.SessionFindManyArgs
  ): Promise<PrismaSession[]> {
    return this.prisma.userProfile
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sessions(args);
  }
}

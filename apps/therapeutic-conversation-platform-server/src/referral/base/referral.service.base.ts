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
  Referral as PrismaReferral,
  UserProfile as PrismaUserProfile,
} from "@prisma/client";

export class ReferralServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ReferralCountArgs, "select">): Promise<number> {
    return this.prisma.referral.count(args);
  }

  async referrals(
    args: Prisma.ReferralFindManyArgs
  ): Promise<PrismaReferral[]> {
    return this.prisma.referral.findMany(args);
  }
  async referral(
    args: Prisma.ReferralFindUniqueArgs
  ): Promise<PrismaReferral | null> {
    return this.prisma.referral.findUnique(args);
  }
  async createReferral(
    args: Prisma.ReferralCreateArgs
  ): Promise<PrismaReferral> {
    return this.prisma.referral.create(args);
  }
  async updateReferral(
    args: Prisma.ReferralUpdateArgs
  ): Promise<PrismaReferral> {
    return this.prisma.referral.update(args);
  }
  async deleteReferral(
    args: Prisma.ReferralDeleteArgs
  ): Promise<PrismaReferral> {
    return this.prisma.referral.delete(args);
  }

  async getUserProfile(parentId: string): Promise<PrismaUserProfile | null> {
    return this.prisma.referral
      .findUnique({
        where: { id: parentId },
      })
      .userProfile();
  }
}
/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { UserProfile } from "./UserProfile";
import { UserProfileCountArgs } from "./UserProfileCountArgs";
import { UserProfileFindManyArgs } from "./UserProfileFindManyArgs";
import { UserProfileFindUniqueArgs } from "./UserProfileFindUniqueArgs";
import { CreateUserProfileArgs } from "./CreateUserProfileArgs";
import { UpdateUserProfileArgs } from "./UpdateUserProfileArgs";
import { DeleteUserProfileArgs } from "./DeleteUserProfileArgs";
import { ConversationFindManyArgs } from "../../conversation/base/ConversationFindManyArgs";
import { Conversation } from "../../conversation/base/Conversation";
import { MentalHealthAssessmentFindManyArgs } from "../../mentalHealthAssessment/base/MentalHealthAssessmentFindManyArgs";
import { MentalHealthAssessment } from "../../mentalHealthAssessment/base/MentalHealthAssessment";
import { ReferralFindManyArgs } from "../../referral/base/ReferralFindManyArgs";
import { Referral } from "../../referral/base/Referral";
import { SessionFindManyArgs } from "../../session/base/SessionFindManyArgs";
import { Session } from "../../session/base/Session";
import { UserProfileService } from "../userProfile.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserProfile)
export class UserProfileResolverBase {
  constructor(
    protected readonly service: UserProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async _userProfilesMeta(
    @graphql.Args() args: UserProfileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserProfile])
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "any",
  })
  async userProfiles(
    @graphql.Args() args: UserProfileFindManyArgs
  ): Promise<UserProfile[]> {
    return this.service.userProfiles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserProfile, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "read",
    possession: "own",
  })
  async userProfile(
    @graphql.Args() args: UserProfileFindUniqueArgs
  ): Promise<UserProfile | null> {
    const result = await this.service.userProfile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserProfile)
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "create",
    possession: "any",
  })
  async createUserProfile(
    @graphql.Args() args: CreateUserProfileArgs
  ): Promise<UserProfile> {
    return await this.service.createUserProfile({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserProfile)
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "update",
    possession: "any",
  })
  async updateUserProfile(
    @graphql.Args() args: UpdateUserProfileArgs
  ): Promise<UserProfile | null> {
    try {
      return await this.service.updateUserProfile({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserProfile)
  @nestAccessControl.UseRoles({
    resource: "UserProfile",
    action: "delete",
    possession: "any",
  })
  async deleteUserProfile(
    @graphql.Args() args: DeleteUserProfileArgs
  ): Promise<UserProfile | null> {
    try {
      return await this.service.deleteUserProfile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Conversation], { name: "conversations" })
  @nestAccessControl.UseRoles({
    resource: "Conversation",
    action: "read",
    possession: "any",
  })
  async findConversations(
    @graphql.Parent() parent: UserProfile,
    @graphql.Args() args: ConversationFindManyArgs
  ): Promise<Conversation[]> {
    const results = await this.service.findConversations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MentalHealthAssessment], {
    name: "mentalHealthAssessments",
  })
  @nestAccessControl.UseRoles({
    resource: "MentalHealthAssessment",
    action: "read",
    possession: "any",
  })
  async findMentalHealthAssessments(
    @graphql.Parent() parent: UserProfile,
    @graphql.Args() args: MentalHealthAssessmentFindManyArgs
  ): Promise<MentalHealthAssessment[]> {
    const results = await this.service.findMentalHealthAssessments(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Referral], { name: "referrals" })
  @nestAccessControl.UseRoles({
    resource: "Referral",
    action: "read",
    possession: "any",
  })
  async findReferrals(
    @graphql.Parent() parent: UserProfile,
    @graphql.Args() args: ReferralFindManyArgs
  ): Promise<Referral[]> {
    const results = await this.service.findReferrals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Session], { name: "sessions" })
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "read",
    possession: "any",
  })
  async findSessions(
    @graphql.Parent() parent: UserProfile,
    @graphql.Args() args: SessionFindManyArgs
  ): Promise<Session[]> {
    const results = await this.service.findSessions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
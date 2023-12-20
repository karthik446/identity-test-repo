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
import { AcademicIdentity } from "./AcademicIdentity";
import { AcademicIdentityCountArgs } from "./AcademicIdentityCountArgs";
import { AcademicIdentityFindManyArgs } from "./AcademicIdentityFindManyArgs";
import { AcademicIdentityFindUniqueArgs } from "./AcademicIdentityFindUniqueArgs";
import { CreateAcademicIdentityArgs } from "./CreateAcademicIdentityArgs";
import { UpdateAcademicIdentityArgs } from "./UpdateAcademicIdentityArgs";
import { DeleteAcademicIdentityArgs } from "./DeleteAcademicIdentityArgs";
import { AcademicIdentityService } from "../academicIdentity.service";
@graphql.Resolver(() => AcademicIdentity)
export class AcademicIdentityResolverBase {
  constructor(protected readonly service: AcademicIdentityService) {}

  async _academicIdentitiesMeta(
    @graphql.Args() args: AcademicIdentityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AcademicIdentity])
  async academicIdentities(
    @graphql.Args() args: AcademicIdentityFindManyArgs
  ): Promise<AcademicIdentity[]> {
    return this.service.academicIdentities(args);
  }

  @graphql.Query(() => AcademicIdentity, { nullable: true })
  async academicIdentity(
    @graphql.Args() args: AcademicIdentityFindUniqueArgs
  ): Promise<AcademicIdentity | null> {
    const result = await this.service.academicIdentity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AcademicIdentity)
  async createAcademicIdentity(
    @graphql.Args() args: CreateAcademicIdentityArgs
  ): Promise<AcademicIdentity> {
    return await this.service.createAcademicIdentity({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AcademicIdentity)
  async updateAcademicIdentity(
    @graphql.Args() args: UpdateAcademicIdentityArgs
  ): Promise<AcademicIdentity | null> {
    try {
      return await this.service.updateAcademicIdentity({
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

  @graphql.Mutation(() => AcademicIdentity)
  async deleteAcademicIdentity(
    @graphql.Args() args: DeleteAcademicIdentityArgs
  ): Promise<AcademicIdentity | null> {
    try {
      return await this.service.deleteAcademicIdentity(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
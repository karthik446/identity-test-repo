import * as graphql from "@nestjs/graphql";
import { AcademicIdentityResolverBase } from "./base/academicIdentity.resolver.base";
import { AcademicIdentity } from "./base/AcademicIdentity";
import { AcademicIdentityService } from "./academicIdentity.service";

@graphql.Resolver(() => AcademicIdentity)
export class AcademicIdentityResolver extends AcademicIdentityResolverBase {
  constructor(protected readonly service: AcademicIdentityService) {
    super(service);
  }
}

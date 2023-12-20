import { Module } from "@nestjs/common";
import { AcademicIdentityModuleBase } from "./base/academicIdentity.module.base";
import { AcademicIdentityService } from "./academicIdentity.service";
import { AcademicIdentityController } from "./academicIdentity.controller";
import { AcademicIdentityResolver } from "./academicIdentity.resolver";

@Module({
  imports: [AcademicIdentityModuleBase],
  controllers: [AcademicIdentityController],
  providers: [AcademicIdentityService, AcademicIdentityResolver],
  exports: [AcademicIdentityService],
})
export class AcademicIdentityModule {}

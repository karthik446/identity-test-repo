import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AcademicIdentityService } from "./academicIdentity.service";
import { AcademicIdentityControllerBase } from "./base/academicIdentity.controller.base";

@swagger.ApiTags("academicIdentities")
@common.Controller("academicIdentities")
export class AcademicIdentityController extends AcademicIdentityControllerBase {
  constructor(protected readonly service: AcademicIdentityService) {
    super(service);
  }
}

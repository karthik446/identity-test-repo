import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AcademicIdentityServiceBase } from "./base/academicIdentity.service.base";

@Injectable()
export class AcademicIdentityService extends AcademicIdentityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

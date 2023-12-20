import { SortOrder } from "../../util/SortOrder";

export type AcademicIdentityOrderByInput = {
  academicPartnerId?: SortOrder;
  createdAt?: SortOrder;
  guildUuid?: SortOrder;
  id?: SortOrder;
  internalStudentId?: SortOrder;
  isDeleted?: SortOrder;
  isLocked?: SortOrder;
  isStudent?: SortOrder;
  partnerStudentId?: SortOrder;
  primaryInternalStudentId?: SortOrder;
  updatedAt?: SortOrder;
};

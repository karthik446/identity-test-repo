import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AcademicIdentityWhereInput = {
  academicPartnerId?: StringNullableFilter;
  guildUuid?: StringNullableFilter;
  id?: StringFilter;
  isDeleted?: BooleanNullableFilter;
  isLocked?: BooleanNullableFilter;
  isStudent?: BooleanNullableFilter;
  partnerStudentId?: StringNullableFilter;
  primaryInternalStudentId?: StringNullableFilter;
};

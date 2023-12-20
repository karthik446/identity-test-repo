import { AcademicIdentity as TAcademicIdentity } from "../api/academicIdentity/AcademicIdentity";

export const ACADEMICIDENTITY_TITLE_FIELD = "academicPartnerId";

export const AcademicIdentityTitle = (record: TAcademicIdentity): string => {
  return record.academicPartnerId?.toString() || String(record.id);
};

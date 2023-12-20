export type AcademicIdentityCreateInput = {
  academicPartnerId?: string | null;
  guildUuid?: string | null;
  internalStudentId: string;
  isDeleted?: boolean | null;
  isLocked?: boolean | null;
  isStudent?: boolean | null;
  partnerStudentId?: string | null;
  primaryInternalStudentId?: string | null;
};

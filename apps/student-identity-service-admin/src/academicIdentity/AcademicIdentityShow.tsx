import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const AcademicIdentityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="academic_partner_id" source="academicPartnerId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="guild_uuid" source="guildUuid" />
        <TextField label="ID" source="id" />
        <TextField label="internal_student_id" source="internalStudentId" />
        <BooleanField label="is_deleted" source="isDeleted" />
        <BooleanField label="is_locked" source="isLocked" />
        <BooleanField label="is_student" source="isStudent" />
        <TextField label="partner_student_id" source="partnerStudentId" />
        <TextField
          label="primary_internal_student_id"
          source="primaryInternalStudentId"
        />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

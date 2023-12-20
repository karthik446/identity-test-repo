import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AcademicIdentityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="academic_partner_id" source="academicPartnerId" />
        <TextInput label="guild_uuid" source="guildUuid" />
        <TextInput label="internal_student_id" source="internalStudentId" />
        <BooleanInput label="is_deleted" source="isDeleted" />
        <BooleanInput label="is_locked" source="isLocked" />
        <BooleanInput label="is_student" source="isStudent" />
        <TextInput label="partner_student_id" source="partnerStudentId" />
        <TextInput
          label="primary_internal_student_id"
          source="primaryInternalStudentId"
        />
      </SimpleForm>
    </Create>
  );
};

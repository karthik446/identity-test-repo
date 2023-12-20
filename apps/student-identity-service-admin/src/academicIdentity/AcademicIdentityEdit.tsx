import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AcademicIdentityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

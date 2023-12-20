import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AcademicIdentityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"academic_identities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

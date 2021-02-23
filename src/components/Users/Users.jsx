import React from "react";

import UsersForm from "./UsersForm";
import UsersTable from "./UsersTable";

export default function Users() {
  return (
    <div>
      <UsersTable />
      <UsersForm />
    </div>
  );
}

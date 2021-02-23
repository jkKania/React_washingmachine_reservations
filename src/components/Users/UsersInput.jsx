import React from "react";
import { Input } from "reactstrap";

export const usersInput = (field) => {
  return (
    <div>
      <Input {...field.input} type={field.type} className="form-control" />
      <span className="reservations__error">{field.meta.error}</span>
    </div>
  );
};

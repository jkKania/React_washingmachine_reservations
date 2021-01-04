import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, Form } from "redux-form";
import { Card, Button, CardBody, FormGroup, Container, Label, Input, CardTitle} from "reactstrap";
import { createUser, clearUsers, deleteUser } from "../actions/user";
import ReactJson from "react-json-view";

const validate = (values) => {
  const errors = {};

  return errors;
};
const onSubmit = (values) => {
  console.log(values);
}
const Users = ({ createUser,clearUsers, handleSubmit, users, submitting }) => (
  <Container className="reservations">
    <Card className="card">
      <CardBody>
        <CardTitle>Add new user</CardTitle>
        <Form onSubmit={handleSubmit(createUser)}>
          <FormGroup>
            <Label for="firstName">First name: </Label>
            <Field
              type="text"
              name="firstName"
              component={Input}
              placeholder="First name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last name:</Label>
            <Field
              type="text"
              name="lastName"
              component={Input}
              placeholder="Last name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="roomNumber">Room number:</Label>
            <Field
              type="number"
              name="roomNumber"
              component={Input}
              initialValues="0"
              placeholder="Room number"
            />
          </FormGroup>
          <Button color="secondary" type="submit" disabled={submitting}>
            Create user
          </Button>
          <Button
            onClick={clearUsers}
            color="warning"
            className="reservations__clear-btn"
          >
            Reset Data
          </Button>
        </Form>
      </CardBody>
    </Card>

    <ReactJson src={users} name="userStoreState" />
  </Container>
);

const mapStateToProps = (state) => ({
  users: state.user,
});

const mapDispatchToProps = {
  createUser,
  clearUsers,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "users",
    validate,
    enableReinitialize: true,
  })(Users)
);

import React from "react";
import { connect } from "react-redux";
import { reduxForm, Form, Field, reset } from "redux-form";
import {
  Card,
  Button,
  CardBody,
  FormGroup,
  Container,
  Label,
  CardTitle,
} from "reactstrap";
import ReactJson from "react-json-view";

import { createUser, clearUsers } from "../../actions/user";
import { usersInput } from "./UsersInput";
import validate from "./validateUser";

const afterSubmit = (result, dispatch) => dispatch(reset("users"));

const UsersForm = ({
  createUser,
  clearUsers,
  handleSubmit,
  users,
  submitting,
}) => {
  return (
    <Container>
      <Card className="card">
        <CardBody>
          <CardTitle>Add new user</CardTitle>
          <Form onSubmit={handleSubmit(createUser)}>
            <FormGroup>
              <Label for="firstName">First name: </Label>
              <Field
                type="text"
                name="firstName"
                component={usersInput}
                placeholder="First name "
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last name:</Label>
              <Field
                type="text"
                name="lastName"
                component={usersInput}
                placeholder="Last name "
              />
            </FormGroup>
            <FormGroup>
              <Label for="roomNumber">Room number:</Label>
              <Field
                type="number"
                name="roomNumber"
                component={usersInput}
                initialValues="0"
                placeholder="Room number "
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
};

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
    onSubmitSuccess: afterSubmit,
  })(UsersForm)
);

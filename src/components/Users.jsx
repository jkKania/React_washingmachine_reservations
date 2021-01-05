import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, Form } from "redux-form";
import {
  Card,
  Button,
  CardBody,
  FormGroup,
  Container,
  Label,
  CardTitle,
  Input,
} from "reactstrap";
import { createUser, clearUsers, deleteUser } from "../actions/user";
import ReactJson from "react-json-view";


const onInputChange = (target) => {
  var name = target.name;
  var value = target.value;

};

const Users = ({ createUser,onInputChange ,clearUsers, handleSubmit, user, submitting }) => (
    <Container>
      <Card className="card">
        <CardBody>
          <CardTitle>Add new user</CardTitle>
          <Form onSubmit={handleSubmit(createUser)}>
            <FormGroup>
              <Label for="firstName">First name: </Label>
              <Input
                type="text"
                name="firstName"
                component="input"
                placeholder="First name "
                // onChange={(e) => onInputChange(e.target)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last name:</Label>
              <Input
                type="text"
                name="lastName"
                component="input"
                placeholder="Last name "
                // onChange={(e) => onInputChange(e.target)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="roomNumber">Room number:</Label>
              <Input
                type="number"
                name="roomNumber"
                component="input"
                initialValues="0"
                placeholder="Room number "
                // onChange={(e) => onInputChange(e.target)}
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

      <ReactJson src={user} name="userStoreState" />
    </Container>
);

const mapStateToProps = (state) => ({
  user: state.user,
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
  })(Users)
);

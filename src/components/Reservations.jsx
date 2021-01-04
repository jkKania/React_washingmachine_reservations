import React from "react";
import { connect } from "react-redux";
import { reduxForm, FieldArray, Form } from "redux-form";
import { Button, Container, Row, Col } from "reactstrap";
import _map from "lodash/map";
import ReactJson from "react-json-view";
import moment from "moment";

import { WEEK_DAYS } from "../common/constants";
import { clearReservations, saveReservations } from "../actions/machine";
import SingleDayReservations from "./SingleDayReservations";
import "./Reservations.scss";

const validate = (values) => {
  const errors = {};

  WEEK_DAYS.forEach((day) => {
    var singleDayReservationErrors = [];
    var previousReservation;

    values[day].forEach((reservation, reservationIndex) => {
      var reservationError = {};
      var startTime = moment(reservation.start);
      var endTime = moment(reservation.end);
      var maxDuration = moment(startTime).add(150, "minutes");

      if (!reservation.start && !reservation.end)
      {
        reservationError.start = "Can not be empty";
        reservationError.end = "Can not be empty";
      }
      
      if (!reservation.start)
        reservationError.start = "Can not be empty";

      if (!reservation.end)
        reservationError.end = "Can not be empty";

      if (reservation.start && reservation.end) {
        if (moment(startTime).isAfter(endTime))
          reservationError.end = "End time should be after start time";
        else if (moment(maxDuration).isSameOrBefore(endTime))
          reservationError.end = "Reservation too long";
        else if (previousReservation)
        {
          if (moment(previousReservation.end).add(15, "minutes").isSameOrAfter(reservation.start))
            reservationError.start = "Two reservations too close to each other";
          else if(moment(reservation.start).add(5, "minutes").isBetween(previousReservation.start, previousReservation.end))
            reservationError.start = "Conflict between two reservations";
            reservationError.end = "Conflict between two reservations";
        }
      }
      
      previousReservation = reservation;
      singleDayReservationErrors.push(reservationError);
    });

    if (singleDayReservationErrors.length)
      errors[day] = singleDayReservationErrors;
  });
  return errors;
};

const Reservations = ({
  clearReservations,
  handleSubmit,
  machine,
  saveReservations,
}) => (
  <Container className="reservations">
    <Form onSubmit={handleSubmit(saveReservations)}>
      <Row>
        <Col xs={8}>
          <h2>Reservations</h2>
          {_map(WEEK_DAYS, (day) => (
            <FieldArray
              key={`single-${day}`}
              component={SingleDayReservations}
              name={day}
            />
          ))}
          <Button color="secondary" type="submit">
            Save data
          </Button>
        </Col>
        <Col xs={4}>
          <ReactJson src={machine} name="machineStoreState" />
          <Button
            onClick={clearReservations}
            color="warning"
            className="reservations__clear-btn"
          >
            Reset Data
          </Button>
        </Col>
      </Row>
    </Form>
  </Container>
);

const mapStateToProps = (state) => ({
  machine: state.machine,
  initialValues: state.machine,
});

const mapDispatchToProps = {
  clearReservations,
  saveReservations,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "reservations",
    validate,
    enableReinitialize: true,
  })(Reservations)
);

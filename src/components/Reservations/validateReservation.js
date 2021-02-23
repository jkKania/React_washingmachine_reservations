import moment from "moment";
import { WEEK_DAYS } from "../../common/constants";

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

      if (!reservation.start && !reservation.end) {
        reservationError.start = "Can not be empty";
        reservationError.end = "Can not be empty";
      }

      if (!reservation.start) reservationError.start = "Can not be empty";

      if (!reservation.end) reservationError.end = "Can not be empty";

      if (reservation.start && reservation.end) {
        if (moment(startTime).isAfter(endTime))
          reservationError.end = "End time should be after start time";
        else if (moment(maxDuration).isSameOrBefore(endTime))
          reservationError.end = "Reservation too long";
        else if (previousReservation) {
          if (
            moment(previousReservation.end)
              .add(15, "minutes")
              .isSameOrAfter(reservation.start)
          )
            reservationError.start = "Two reservations too close to each other";
          else if (
            moment(reservation.start)
              .add(5, "minutes")
              .isBetween(previousReservation.start, previousReservation.end)
          ) {
            reservationError.start = "Conflict between two reservations";
            reservationError.end = "Conflict between two reservations";
          }
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

export default validate;

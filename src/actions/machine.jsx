import * as types from "./actionTypes";

export const saveReservations = (days) => ({
  type: types.SAVE_RESERVATIONS,
  days
});

export const clearReservations = () => ({
  type: types.CLEAR_RESERVATIONS
});

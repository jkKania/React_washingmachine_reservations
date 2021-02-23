import * as types from "./actionTypes";
import { nanoid } from "nanoid";
export const createUser = (user) => ({
  type: types.CREATE_USER,
  user: { id: nanoid(), ...user },
});
export const clearUsers = () => ({
  type: types.CLEAR_USERS,
});
export const deleteUser = (id) => ({
  type: types.DELETE_USER,
  id: id,
});

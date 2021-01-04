import * as types from "./actionTypes";

export const createUser = (payload) => ({
    type: types.CREATE_USER,
    user: payload
})
export const clearUsers = () => ({
    type: types.CLEAR_USERS,
})
export const deleteUser = (payload) => ({
    type: types.DELETE_USER,
    user: payload
})
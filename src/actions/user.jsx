import * as types from "./actionTypes";

export const createUser = (user) => ({
    type: types.CREATE_USER,
    user: {...user}
})
export const clearUsers = () => ({
    type: types.CLEAR_USERS,
})
export const deleteUser = (payload) => ({
    type: types.DELETE_USER,
    user: payload
})
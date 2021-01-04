import { combineReducers } from "redux";
import machine from "./machine";
import user from "./user";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  machine,
  user,
  form: formReducer
});

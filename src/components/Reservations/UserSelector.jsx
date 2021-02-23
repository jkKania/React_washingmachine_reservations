import React from "react";
import { connect } from "react-redux";

const UserSelector = ({ users }) => (
  <select className="form-control">
    {users.map((user, index) => (
      <option key={index} value={user}>
        {user.firstName} {user.lastName}
      </option>
    ))}
  </select>
);

const mapStateToProps = (state) => ({
  users: state.user,
});
export default connect(mapStateToProps, null)(UserSelector);

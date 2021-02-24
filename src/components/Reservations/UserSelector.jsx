import React from "react";
import { connect } from "react-redux";

const UserSelector = ({ users, input, meta: { error }, dispatch, ...rest }) => {
  return (
    <div>
      <select
        className="form-control"
        onBlur={(e) => input.onBlur(JSON.parse(e.target.value))}
        onChange={(e) => input.onChange(JSON.parse(e.target.value))}
        {...rest}
      >
        <option disabled>Select</option>
        {users.map((user, index) => (
          <option key={index} value={JSON.stringify(user)}>
            {user.firstName + " " + user.lastName}
          </option>
        ))}
      </select>
      <span className="reservations__error">{error}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.user,
});
export default connect(mapStateToProps)(UserSelector);

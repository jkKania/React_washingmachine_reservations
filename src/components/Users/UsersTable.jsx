import React from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";

import { deleteUser } from "../../actions/user";
const handleDelete = (id, users) => {
  var usr = users.find((user) => user.id === id);
  console.log(usr);
  console.log(users.indexOf(usr));
};
const UsersTable = ({ deleteUser, users }) => (
  <div>
    <table className="table ">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Room number</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.roomNumber}</td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteUser(index)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const mapStateToProps = (state) => ({
  users: state.user,
});

export default connect(mapStateToProps, { deleteUser })(UsersTable);

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.roomNumber) {
    errors.roomNumber = "Required";
  }
  return errors;
};

export default validate;

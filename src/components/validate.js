import { error_message } from "./util";

const validate = data => {
  const errors = {};
  //TODO: change 1-255 after testing
  if (!/^\s*(\S\s*){1,5}$/.test(data.firstname)) {
    errors.firstname =
      data.firstname.length > 1
        ? error_message.firstname
        : `*The Firstname ${error_message.empty}`;
  }

  if (!/^\s*(\S\s*){1,5}$/.test(data.lastname)) {
    errors.lastname =
      data.lastname.length > 1
        ? error_message.lastname
        : `*The Lastname ${error_message.empty}`;
  }

  if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email =
      data.email.length > 1
        ? error_message.email
        : `*The email ${error_message.empty} `;
  }

  if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      data.phone_number
    )
  ) {
    errors.phone_number =
      data.phone_number.length > 1
        ? error_message.phone_number
        : `*The phone number ${error_message.empty}`;
  }

  if (data.zip_code.length < 1) {
    errors.zip_code = `*The zip_code  ${error_message.empty}`;
  }

  if (!/^\s*(\S\s*){6,20}$/.test(data.password)) {
    errors.password =
      data.password.length > 1
        ? error_message.password
        : `*The Password ${error_message.empty}`;
  }

  if (data.password !== data.confirm_password) {
    errors.confirm_password = error_message.confirm_password;
  }

  return errors;
};
export default validate;

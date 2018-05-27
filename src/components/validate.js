import { errorMessage } from './util';

export function signUpValidate(data, exist = '') {
  const errors = {};
  if (data.firstname !== 'undefined' && !/^\s*(\S\s*){1,255}$/.test(data.firstname)) {
    errors.firstname =
      data.firstname.length > 1
        ? errorMessage.firstname
        : `*The Firstname ${errorMessage.empty}`;
  }

  if (data.lastname !== 'undefined' && !/^\s*(\S\s*){1,255}$/.test(data.lastname)) {
    errors.lastname =
      data.lastname.length > 1
        ? errorMessage.lastname
        : `*The Lastname ${errorMessage.empty}`;
  }

  if (data.email !== 'undefined' && !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email =
      data.email.length > 1
        ? errorMessage.email
        : `*The email ${errorMessage.empty} `;
  } else if (exist.length > 0) {
    errors.email = errorMessage.exist;
  }

  if (data.phoneNumber !== 'undefined' &&
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(data.phoneNumber)
  ) {
    errors.phoneNumber =
      data.phoneNumber.length > 1
        ? errorMessage.phoneNumber
        : `*The phone number ${errorMessage.empty}`;
  }

  if (data.zipCode && data.zipCode.length < 1) {
    errors.zipCode = `*The zip_code  ${errorMessage.empty}`;
  }

  if (data.password !== 'undefined' && !/^\s*(\S\s*){6,20}$/.test(data.password)) {
    errors.password =
      data.password.length > 1
        ? errorMessage.password
        : `*The Password ${errorMessage.empty}`;
  }

  if (data.password !== 'undefined' && data.password !== data.confirmPassword) {
    errors.confirmPassword = errorMessage.confirmPassword;
  }

  return errors;
}
export function loginValidate(data) {
  const errors = {};


  if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email =
      data.email.length > 1
        ? errorMessage.email
        : `*The email ${errorMessage.empty} `;
  }


  if (!/^\s*(\S\s*){6,20}$/.test(data.password)) {
    errors.password =
      data.password.length > 1
        ? errorMessage.password
        : `*The Password ${errorMessage.empty}`;
  }


  return errors;
}


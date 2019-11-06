export const validateInput = body => {
  const value = body.value;
  const name = body.type;
  const password = body.password;
  const ignore = body.ignore;
  if (value.length === 0 && !ignore) {
    return {
      valid: false,
      feedback: 'This field is required.'
    };
  }
  switch (name) {
    case 'name':
      const alpha = /^[a-zA-Z\s]+$/;
      return alpha.test(value)
        ? {
            valid: true,
            feedback: ''
          }
        : {
            valid: true,
            feedback: ''
          };
    case 'email':
      const mail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      return mail.test(value)
        ? {
            valid: true,
            feedback: ''
          }
        : {
            valid: false,
            feedback: 'Email format is invalid'
          };
    case 'password':
      const lowerCaseREGEX = /[a-z]/;
      const upperCaseREGEX = /[A-Z]/;
      const specialCharacterREGEX = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      const numberREGEX = /[0-9]/;
      if (value.length < 8)
        return {
          valid: false,
          feedback: 'Password must not be less than eight characters'
        };

      if (!numberREGEX.test(value))
        return {
          valid: false,
          feedback: 'Password must contain at least one number'
        };

      if (!specialCharacterREGEX.test(value))
        return {
          valid: false,
          feedback: 'Password must contain at least one special character'
        };

      if (!upperCaseREGEX.test(value))
        return {
          valid: false,
          feedback: 'Password must contain at least one uppercase character'
        };

      if (!lowerCaseREGEX.test(value))
        return {
          valid: false,
          feedback: 'Password must contain at least one lowercase character'
        };

      return {
        valid: true,
        feedback: ''
      };
    case 'confirmpassword':
      if (password === value) {
        return {
          valid: true,
          feedback: ''
        };
      }
      return {
        valid: false,
        feedback: 'Password did not match previous password'
      };
    default:
      return {
        valid: true,
        feedback: ''
      };
  }
};

export const formValid = (errors, form) => {
  const formErrors = { ...errors };
  const newForm = { ...form };
  try {
    let valid = true;
    let body = {};
    Object.keys(formErrors).forEach(name => {
      //Always ensure attr name = password  for password input in component.
      if (newForm[name]['type'] === 'confirmpassword') {
        newForm[name]['password'] = newForm['password']['value'];
      }
      const validate = validateInput(newForm[name]);
      formErrors[name] = validate;
      body[name] = newForm[name]['value'];
      valid = valid && validate.valid;
    });
    return { formErrors, valid, body };
  } catch (error) {
    return { formErrors, valid: false };
  }
};

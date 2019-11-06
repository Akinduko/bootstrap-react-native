export const formatPhoneNumber = value => {
  let formattedValue = value.toString();
  if (formattedValue[formattedValue.length - 1] == ' ') {
    formattedValue = formattedValue.trim();
  } else {
    formattedValue = formattedValue.replace(/\s+/g, '');
    formattedValue =
      formattedValue.slice(0, 3) + ' ' + formattedValue.slice(3, 6) + ' ' + formattedValue.slice(6);
  }
  formattedValue = formattedValue.trim();
  return formattedValue;
};

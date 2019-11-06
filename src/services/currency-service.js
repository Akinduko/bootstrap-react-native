const getDigitsFromValue = (value = '') => value.replace(/[^0-9]+/g, '') || '';

const padDigits = digits => {
  const desiredLength = 3;
  const actualLength = digits.length;

  if (actualLength >= desiredLength) {
    return digits;
  }

  const amountToAdd = desiredLength - actualLength;
  const padding = '0'.repeat(amountToAdd);

  return `${padding}${digits}`;
};
const removeLeadingZeros = number => number.replace(/^0+([0-9]+)/, '$1');

const addDecimalToNumber = (number, separator) => {
  const centsStartingPosition = number.length - 2;

  const dollars = removeLeadingZeros(number.substring(0, centsStartingPosition));

  const cents = number.substring(centsStartingPosition);
  return `${dollars}${separator}${cents}`;
};

export const convertToCurrency = (value, separator = '.') => {
  if (typeof value === 'number') value = value.toString();

  const digits = getDigitsFromValue(value);
  const digitsWithPadding = padDigits(digits);

  return addDecimalToNumber(digitsWithPadding, separator);
};

import _ from 'lodash';
import { ERROR_MESSAGE } from './Enum';

export function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return ERROR_MESSAGE.isRequired;
}

export function isNaturalNumber(value) {
  const valInt = _.toNumber(value);
  if (typeof valInt === 'number' && valInt > 0 && _.isInteger(valInt)) {
    return true;
  }
  return ERROR_MESSAGE.isNaturalNumber;
}

export default {
  isRequired,
  isNaturalNumber,
};

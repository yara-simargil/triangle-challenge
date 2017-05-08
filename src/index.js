import triangleTypes from './triangleTypes';
import errors from './errors';

export default function getTriangleType(a, b, c) {
  validateArguments(...arguments);

  if (a === b && a === c) {
    return triangleTypes.equilateral;
  }
  if (a === b || a === c || b === c) {
    return triangleTypes.isosceles;
  }
  return triangleTypes.scalene;
}

function validateArguments(a, b, c) {
  if (arguments.length !== 3) {
    throw new Error(errors.wrongArgsNumber);
  }
  [...arguments].forEach(arg => {
    if (typeof arg !== 'number' || isNaN(arg)) {
      throw new Error(errors.wrongArgType);
    }
    if (arg <= 0) {
      throw new Error(errors.negativeOrZeroSides);
    }
    // todo: check big numbers
  });
  if (a + b < c || a + c < b || b + c < a) {
    throw new Error(errors.invalidTriangleSides);
  }
}

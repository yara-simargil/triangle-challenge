import expect from 'expect.js';
import getTriangleType from '../src/index';
import triangleTypes from '../src/triangleTypes';
import errors from '../src/errors';

describe('Triangle challenge:', () => {
  describe('invalid arguments', () => {
    it('no arguments', () => {
      expect(getTriangleType).to.throwException(errors.wrongArgsNumber);
    });

    it('too little arguments', () => {
      expect(getTriangleType).withArgs(1, 2).to.throwException(errors.wrongArgsNumber);
    });

    it('too many arguments', () => {
      expect(getTriangleType).withArgs(1, 2, 3, 4).to.throwException(errors.wrongArgsNumber);
    });

    it('passed `undefined`', () => {
      expect(getTriangleType).withArgs(undefined, 2, 3).to.throwException(errors.wrongArgType);
    });

    it('passed `null`', () => {
      expect(getTriangleType).withArgs(1, null, 3).to.throwException(errors.wrongArgType);
    });

    it('passed `string`', () => {
      expect(getTriangleType).withArgs(1, 2, '3').to.throwException(errors.wrongArgType);
    });

    it('passed `bool`', () => {
      expect(getTriangleType).withArgs(1, 2, true).to.throwException(errors.wrongArgType);
    });

    it('passed `object`', () => {
      expect(getTriangleType).withArgs({}, 2, 3).to.throwException(errors.wrongArgType);
    });

    it('passed `NaN`', () => {
      expect(getTriangleType).withArgs(1, Number.NaN, 3).to.throwException(errors.wrongArgType);
    });

    it('passed `Infinity`', () => {
      expect(getTriangleType).withArgs(1, 2, Number.POSITIVE_INFINITY).to.throwException(errors.wrongArgType);
    });

    it('passed `0`', () => {
      expect(getTriangleType).withArgs(0, 2, 3).to.throwException(errors.negativeOrZeroSides);
    });

    it('passed negative value', () => {
      expect(getTriangleType).withArgs(1, -2, 3).to.throwException(errors.negativeOrZeroSides);
    });

    it('passed sides cannot form a triangle', () => {
      expect(getTriangleType).withArgs(1, 1, 3).to.throwException(errors.invalidTriangleSides);
      expect(getTriangleType).withArgs(1, 3, 1).to.throwException(errors.invalidTriangleSides);
      expect(getTriangleType).withArgs(3, 1, 1).to.throwException(errors.invalidTriangleSides);
    });
  });

  describe('`getTriangleType`', () => {
    const big = 99999999;
    const small = 1.0 / big;
    it('of an equilateral triangle', () => {
      const type = getTriangleType(big, big, big);
      expect(type).to.be(triangleTypes.equilateral);
    });

    it('of a small equilateral triangle', () => {
      const type = getTriangleType(small, small, small);
      expect(type).to.be(triangleTypes.equilateral);
    });

    it('of an isosceles triangle', () => {
      const type = getTriangleType(big, big, small);
      expect(type).to.be(triangleTypes.isosceles);
    });

    it('of a small isosceles triangle', () => {
      const type = getTriangleType(small, small, small * 1.1);
      expect(type).to.be(triangleTypes.isosceles);
    });

    it('of a scalene triangle', () => {
      const type = getTriangleType(3, 4, 5);
      expect(type).to.be(triangleTypes.scalene);
    });

    it('of a small scalene triangle', () => {
      const type = getTriangleType(small, small * 1.1, small * 1.2);
      expect(type).to.be(triangleTypes.scalene);
    });

    it('of a small scalene triangle', () => {
      const type = getTriangleType(small, big, big + small);
      expect(type).to.be(triangleTypes.scalene);
    });
  });
});


import { romanNumeralConverter } from '../src/romanNumeral.js/';
import { exportAllDeclaration, tsImportEqualsDeclaration } from '@babel/types';

describe('romanNumeralConverter', () => {

  test('should return a string longer than 0', () => {
    var number = romanNumeralConverter(0);
    expect(number).toEqual(0);
  });

});
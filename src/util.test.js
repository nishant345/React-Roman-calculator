import Utility from './util';
import "@testing-library/jest-dom";

test('should perform the conversion correctly', () => {
    expect(Utility.intToRoman(60)).toMatch(`LX`);
    expect(Utility.romanToInt('LX')).toEqual(60);
    expect(Utility.isRoman('LX')).toBeTruthy();
    expect(Utility.isRoman('xxx')).toBeFalsy();
});

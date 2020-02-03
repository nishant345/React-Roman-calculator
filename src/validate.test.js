import { validateRomanNumeral } from './validate';
import "@testing-library/jest-dom";

test('Vaidation of a Roman numeral ', () => {
    expect(validateRomanNumeral("")).toMatch(`Please enter at least one valid Roman Numeral`);
    expect(validateRomanNumeral(" ")).toMatch(`Roman Numeral contains space, please enter a valid Roman Numeral`);
    expect(validateRomanNumeral("X X ")).toMatch(`Roman Numeral contains space, please enter a valid Roman Numeral`);
    expect(validateRomanNumeral("XVC")).toMatch(`Please enter a valid Roman Numeral`);
    expect(validateRomanNumeral("VXxxx")).toMatch(`Please enter a valid Roman Numeral`);
});

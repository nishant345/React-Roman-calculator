import { add, substract, multiply } from './calculate';
import "@testing-library/jest-dom";

test('Addition', () => {
    expect(add(0, 0)).toEqual(0);
    expect(add(-3, -4)).toEqual(-7);
    expect(add(3, 4)).toEqual(7);
});

test('Substraction', () => {
    expect(substract(0, 0)).toEqual(0);
    expect(substract(3, 4)).toEqual(-1);
    expect(substract(-3, -4)).toEqual(1);
    expect(substract(4, 3)).toEqual(1);
});

test('Multiplication', () => {
    expect(multiply(0, 0)).toEqual(0);
    expect(multiply(3, 4)).toEqual(12);
    expect(multiply(4, -3)).toEqual(-12);
    expect(multiply(-4, 3)).toEqual(-12);
    expect(multiply(-4, -3)).toEqual(12);
});
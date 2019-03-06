import {calculateCenter} from './utils';
import {getScreenCenter} from "./utils";

test('Checks that the center is 5', () => {
    expect(calculateCenter(10)).toBe(5);
});

test('Get"s the screen center coordinates', () => {
    expect(getScreenCenter()).toEqual([600, 400]);
});
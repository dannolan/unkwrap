import {
  getString,
  getNumber,
  getBoolean,
  getObject,
  getArray,
} from '../src/knower';

describe('Testing the cases we have defined for knower', () => {
  it('should be able to extract string cases', () => {
    const item = 'hello_world' as unknown;
    const extracted = getString(item);
    expect(extracted).toEqual('hello_world');
    const undefinedcase = undefined;
    const extractundefined = getString(undefinedcase);
    expect(extractundefined).toBe(undefined);
  });
  it('Should be able to extract numerical cases', () => {
    const item = 566 as unknown;
    const extracted = getNumber(item);
    expect(item).toEqual(566);
    const undefinedcase = undefined;
    const extractundefined = getNumber(undefinedcase);
    expect(extractundefined).toBe(undefined);
  });
  it('Should be able to extract boolean cases', () => {
    const item = true as unknown;
    const extracted = getBoolean(item);
    expect(extracted).toBeTruthy();
    const undefinedcase = undefined;
    const extractundefined = getBoolean(undefinedcase);
    expect(extractundefined).toBe(undefined);
  });
  it('Should be able to extract object cases', () => {
    const item = {} as unknown;
    const extracted = getObject(item);
    expect(extracted).toBeTruthy();
    const undefinedcase = undefined;
    const extractundefined = getObject(undefinedcase);
    expect(extractundefined).toBe(undefined);
  });
  it('Should be able to extract array cases', () => {
    const item = [1, 2, 3] as unknown;
    const extracted = getArray(item);
    expect(extracted).toBeTruthy();
    const undefinedcase = undefined;
    const extractundefined = getArray(undefinedcase);
    expect(extractundefined).toBe(undefined);
  });
});

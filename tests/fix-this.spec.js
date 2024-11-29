const Lib = require('../lib/fix-this');

describe('testing lib', () => {
  test('should be true', () => {
    const lib = new Lib();
    const result = lib.get();

    expect(result).toBe(true);
    expect(lib).toBeInstanceOf(Lib);
  });

  test('should accept options', () => {
    const lib = new Lib({ any: false });
    const result = lib.get();

    expect(result).toBe(false);
  });

  test('should accept null options', () => {
    const lib = new Lib({ any: null });
    const result = lib.get();

    expect(result).toBeNull();
  });

  test('should return expected string', () => {
    const lib = new Lib({ any: null });
    const result = lib.getMessage();

    expect(result).toBe('Hi, this is a Publ1c L1br4ry! (=');
  });
});

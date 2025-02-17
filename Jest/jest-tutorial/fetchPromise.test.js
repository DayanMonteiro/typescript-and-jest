const fetchPromise = require("./fetchPromise");

test("the data is peanut butter", () => {
  return expect(fetchPromise()).resolves.toBe("peanut butter");
});

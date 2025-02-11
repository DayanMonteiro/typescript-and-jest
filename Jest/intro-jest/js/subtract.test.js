const subtract = require("./subtract");

test("properly subtracting two mumbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});

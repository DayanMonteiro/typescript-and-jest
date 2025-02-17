const myFunction = require("./function");

test("thows on invalid input", () => {
  expect(() => {
    myFunction("string");
  }).toThrow();
});

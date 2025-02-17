const sum = require("./sum");

test("adds 1 +2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("tow plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("null is falsy", () => {
  const n = null;
  expect(n).toBeFalsy();
});

test("one is truthy", () => {
  const noFalsy = 1;
  expect(noFalsy).toBeTruthy();
});

test("one is truthy", () => {
  const truthy = true;
  expect(truthy).toBeTruthy();
});

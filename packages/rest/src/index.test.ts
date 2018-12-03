import { rest } from "./";

test("#rest", () => {
  expect.assertions(1);
  expect(rest(4, 2)).toBe(2);
});

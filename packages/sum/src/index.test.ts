import { sum } from "./";

test("#sum", () => {
  expect.assertions(1);
  expect(sum(2, 2)).toBe(4);
});

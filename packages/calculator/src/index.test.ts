import { calculator, Operation } from "./";

test("#calculator", () => {
  expect.assertions(2);
  expect(calculator(Operation.Sum, 4, 2)).toBe(6);
  expect(calculator(Operation.Rest, 4, 2)).toBe(2);
});

import { sum } from "@pkgz/sum";
import { rest } from "@pkgz/rest";

export enum Operation {
  Sum = "sum",
  Rest = "rest"
}

const operations = {
  sum,
  rest
};

export function calculator(op: Operation, a: number, b: number) {
  return operations[op](a, b);
}

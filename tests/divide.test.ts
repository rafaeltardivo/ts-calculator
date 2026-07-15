import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { divide } from "../src/divide.js";

describe("divide", () => {
  it("divides two positive numbers", () => {
    assert.equal(divide(10, 2), 5);
  });

  it("divides a positive number by a negative number", () => {
    assert.equal(divide(9, -3), -3);
  });

  it("divides resulting in a decimal", () => {
    assert.equal(divide(7, 2), 3.5);
  });
});

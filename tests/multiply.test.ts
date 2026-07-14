import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { multiply } from "../src/multiply.js";

describe("multiply", () => {
  it("multiplies two positive numbers", () => {
    assert.equal(multiply(3, 4), 12);
  });

  it("multiplies a positive and a negative number", () => {
    assert.equal(multiply(5, -2), -10);
  });

  it("multiplying by zero returns zero", () => {
    assert.equal(multiply(7, 0), 0);
  });
});

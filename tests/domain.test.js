
import test from "node:test";
import assert from "node:assert/strict";
import { daysOfSupplies } from "../web/js/domain.js";

// ----- normal cases -----
test("normal input rounds down to complete days", () => {
  assert.equal(daysOfSupplies(25, 8), 3);
});

test("exact division gives the exact number of days", () => {
  assert.equal(daysOfSupplies(18, 6), 3);
});

test("zero units gives zero days", () => {
  assert.equal(daysOfSupplies(0, 5), 0);
});

test("units smaller than daily use gives zero days", () => {
  assert.equal(daysOfSupplies(5, 10), 0);
});

// ----- invalid daily use -----
test("daily use of zero throws RangeError", () => {
  assert.throws(() => daysOfSupplies(10, 0), RangeError);
});

test("negative daily use throws RangeError", () => {
  assert.throws(() => daysOfSupplies(10, -2), RangeError);
});

test("daily use above the maximum throws RangeError", () => {
  assert.throws(() => daysOfSupplies(10, 1000001), RangeError);
});

// ----- invalid units -----
test("negative units throws RangeError", () => {
  assert.throws(() => daysOfSupplies(-1, 2), RangeError);
});

test("units above the maximum throws RangeError", () => {
  assert.throws(() => daysOfSupplies(1000001, 1), RangeError);
});

// ----- fractional and string inputs -----
test("fractional units throws RangeError", () => {
  assert.throws(() => daysOfSupplies(10.5, 2), RangeError);
});

test("fractional daily use throws RangeError", () => {
  assert.throws(() => daysOfSupplies(10, 2.5), RangeError);
});

test("string units throws RangeError", () => {
  assert.throws(() => daysOfSupplies("10", 2), RangeError);
});

test("string daily use throws RangeError", () => {
  assert.throws(() => daysOfSupplies(10, "2"), RangeError);
});

test("NaN and Infinity throw RangeError", () => {
  assert.throws(() => daysOfSupplies(NaN, 2), RangeError);
  assert.throws(() => daysOfSupplies(10, Infinity), RangeError);
});

// ----- maximum supported units -----
test("maximum units with daily use of 1", () => {
  assert.equal(daysOfSupplies(1000000, 1), 1000000);
});

test("maximum units with maximum daily use", () => {
  assert.equal(daysOfSupplies(1000000, 1000000), 1);
});

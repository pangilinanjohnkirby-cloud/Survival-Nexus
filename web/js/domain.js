export function daysOfSupplies(units, dailyUse) {
  // units must be a safe integer from 0 to 1,000,000
  if (!Number.isSafeInteger(units) || units < 0 || units > 1000000) {
    throw new RangeError("units must be a whole number from 0 to 1,000,000");
  }

  // dailyUse must be a safe integer from 1 to 1,000,000
  if (!Number.isSafeInteger(dailyUse) || dailyUse < 1 || dailyUse > 1000000) {
    throw new RangeError("dailyUse must be a whole number from 1 to 1,000,000");
  }

  // complete days only, rounded down
  return Math.floor(units / dailyUse);
}
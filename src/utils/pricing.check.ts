// ponytail: no test runner in this project. Run with `npm run check:pricing`.
import assert from "node:assert/strict";
import { calculateFare, isPeakHour, BASE_FARE } from "./pricing.ts";

// Off-peak, single passenger: base + distance only.
const off = calculateFare(20, 1, "12:00");
assert.equal(off.base, BASE_FARE);
assert.equal(off.distance, 3000);
assert.equal(off.passengers, 0, "first passenger is included in the base fare");
assert.equal(off.peak, 0);
assert.equal(off.total, 6000);

// Extra passengers are charged per head beyond the first.
assert.equal(calculateFare(20, 3, "12:00").passengers, 2000);

// Peak hour adds 25% of the subtotal.
const peak = calculateFare(20, 1, "07:30");
assert.equal(peak.peak, 1500);
assert.equal(peak.total, 7500);

// Breakdown must always add up to the total, or the summary lies to the customer.
for (const [km, pax, time] of [[0, 1, ""], [7.4, 2, "17:00"], [63.2, 4, "05:59"]] as const) {
    const f = calculateFare(km, pax, time);
    assert.equal(f.base + f.distance + f.passengers + f.peak, f.total, `breakdown mismatch at ${km}km`);
}

assert.equal(isPeakHour(""), false);
assert.equal(isPeakHour("09:00"), true);
assert.equal(isPeakHour("10:00"), false);

console.log("pricing: all checks passed");

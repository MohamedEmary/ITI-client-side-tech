// Example 1: ISO date string
// ISO format ("YYYY-MM-DD"), JavaScript interprets it as UTC midnight
// then converted to local time with the timezone of egypt AT THAT TIME
// midnight 00:00:00
// UTC date => local date

// +3 h => midnight UTC => 03:00:00
console.log("2025-07-13 = ", new Date("2025-07-13")); // time is not set so it uses

// Example 2: Date and time string
// 'T' means "time" in ISO format
console.log("2025-07-13T15:30:00 = ", new Date("2025-07-13T15:30:00")); // 2025-07-13T12:30:00.000Z 12 not 15 because of timezone difference
console.log("2025-07-13T15:30:00Z = ", new Date("2025-07-13T15:30:00Z"));

// Example 3: US short date string
// US format ("MM/DD/YYYY"), JavaScript interprets it as local midnight
console.log("07/13/2025 = ", new Date("07/13/2025")); // 2025-07-12T21:00:00.000Z

// Example 4: Long date string
console.log("July 13, 2025 20:15:30 = ", new Date("July 13, 2025 20:15:30")); // 2025-07-13T17:15:30.000Z
console.log(
	"2025-07-13T17:15:30.000Z = ",
	new Date("2025-07-13T17:15:30.000Z")
);

// Example 5: Numeric values (year, month, day)
// Month is 0-based: 6 = July
// numeric values, JavaScript interprets it as local midnight
console.log("(2025, 6, 13) = ", new Date(2025, 6, 13)); // 2025-07-12T21:00:00.000Z

// Example 6: Numeric values (year, month, day, hour, minute, second)
console.log("(2025, 0, 13, 15, 30, 0) = ", new Date(2025, 0, 13, 15, 30, 0)); // 2025-07-13T12:30:00.000Z

// Example 7: Numeric values (year, month, day, hour, minute, second, ms)
console.log(
	"(2025, 6, 13, 15, 30, 0, 500) = ",
	new Date(2025, 6, 13, 15, 30, 0, 500)
); // 2025-07-13T12:30:00.500Z

// Example 8: Milliseconds since Epoch
// 1 Jan 1970

console.log(Date.now());
console.log("(1755586536852) = ", new Date(1755586536852)); // 2025-07-13T00:40:00.000Z

// Example 9: Date string with time zone
console.log("2025-07-13T10:00:00Z = ", new Date("2025-07-13T10:00:00Z")); // 2025-07-13T10:00:00.000Z
console.log("2025-07-13T10:00:00 = ", new Date("2025-07-13T10:00:00")); // 2025-07-13T07:00:00.000Z

// Example 10: Only year
// ISO format ("YYYY-MM-DD"), JavaScript interprets it as UTC midnight
console.log("2025 = ", new Date("2025")); // 2025-01-01T00:00:00.000Z

// Example 11: Only month and year
// ISO format ("YYYY-MM-DD"), JavaScript interprets it as UTC midnight
console.log("2025-07 = ", new Date("2025-07")); // 2025-07-01T00:00:00.000Z

// Example 12: Invalid date string
console.log("not a date = ", new Date("not a date")); // Invalid Date, NaN

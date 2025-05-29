import Duration from './Duration.js';

// Testing the Duration class

const dur1 = new Duration(150); // 2 minutes 30 seconds
console.log(dur1.toString()); // Output: 2m 30s

const dur2 = Duration.fromMinutesAndSeconds(3, 45); // 3 minutes 45 seconds
console.log(dur2.toString()); // Output: 3m 45s

const sum = dur1.plus(dur2);
console.log("Sum:", sum.toString()); // Should print 6m 15s

const diff = dur2.minus(dur1);
console.log("Difference:", diff.toString()); // Should print 1m 15s

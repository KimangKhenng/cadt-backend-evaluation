
//  TODO - You need to import Duration to use it

// main.js
import { Duration } from './Duration.js';

const duration1 = new Duration(90); // 1m 30s
const duration2 = Duration.fromMinutesAndSeconds(2, 30); // 2m 30s

console.log(duration1.toString()); // "1m 30s"
console.log(duration2.toString()); // "2m 30s"

const totalDuration = duration1.plus(duration2);
console.log(totalDuration.toString()); // "4m 0s"

const remainingDuration = duration2.minus(duration1);
console.log(remainingDuration.toString()); // "1m 0s"

const d1 = Duration.fromMinutesAndSeconds(2, 30);
 
const d2 = Duration.fromMinutesAndSeconds(1, 45);

const d3 = d1.plus(d2);
console.log(d3.toString()); // "4m 15s"

const d4 = d1.minus(d2);
console.log(d4.toString()); // "0m 45s"

console.log(d1.toString()); // "2m 30s" (original unchanged)
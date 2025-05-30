
//  TODO - You need to import Duration to use it
import Duration from './Duration.js';


const d1 = new Duration(150);
console.log(d1.toString()); // "2m 30s"
 
const d2 = Duration.fromMinutesAndSeconds(1, 45);
console.log(d2.toString()); // "1m 45s"

const d3 = d1.plus(d2);
console.log(d3.toString()); // "4m 15s"

const d4 = d1.minus(d2);
console.log(d4.toString()); // "0m 45s"

console.log(d1.toString()); // "2m 30s" (original unchanged)
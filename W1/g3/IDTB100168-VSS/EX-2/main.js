import { Duration } from './Duration.js';

const d1 = Duration.fromMinutesAndSeconds(2, 30);
const d2 = Duration.fromMinutesAndSeconds(1, 45);

const d3 = d1.plus(d2);
console.log(d3.toString()); 

const d4 = d1.minus(d2);
console.log(d4.toString()); 

console.log(d1.toString()); 
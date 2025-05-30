/** @format */

import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("./data/raceScores.json");

// Print the results
console.log(raceResultService.raceResults.map((result) => result.toString()));

// print the total time for a participant1 run and swim
console.log(
  raceResultService.getTotalTimeForParticipant("participant1").toString()
); // Expected : 4m 15s

// Retrieve time for a participant and sport
// participant1 swim
const time1_swin = raceResultService.getTimeForParticipant(
  "participant1",
  "swim"
);
console.log(time1_swin.toString()); // Expected: "2m 30s"

//participant1 run
const time1_run = raceResultService.getTimeForParticipant(
  "participant1",
  "run"
);
console.log(time1_run.toString()); // Expected: "2m 30s"

// participant2
const time2_swin = raceResultService.getTimeForParticipant(
  "participant2",
  "swim"
);
console.log(time2_swin.toString()); // Expected: "3m 15s"

import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("./data/raceScores.json");

// Print the result
console.log(raceResultService.raceResults);

// print with format minutes and second
// console.log(JSON.stringify(raceResultService.raceResults, null, 2));

const participantTime = raceResultService.getTotalTimeForParticipant("participant1");
console.log(participantTime.toString());
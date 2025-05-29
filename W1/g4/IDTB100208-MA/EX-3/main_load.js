import { RaceResultsService } from "./service/RaceResultsService.js";


// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("./data/raceScores.json");

// Print the resuts
console.log(JSON.stringify(raceResultService, null, 2));
 // Expected : participant1: 4m 15s, participant2: 3m 15s
console.log("participant1:", raceResultService.getTotalTimeForParticipant("participant1").toString());
console.log("participant2:", raceResultService.getTotalTimeForParticipant("participant2").toString());


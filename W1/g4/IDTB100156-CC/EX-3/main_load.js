import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("./data/raceScores.json");

// Print the resuts
console.log(raceResultService.raceResults);

// Test getTimeForParticipant method
const time = raceResultService.getTimeForParticipant("participant1", "swim");
console.log("Time for participant1 swim:", time ? time.toString() : "Not found");



// Test getTotalTimeForParticipant method
const times = raceResultService.getTotalTimeForParticipant("participant1");
console.log("Total time for participant: " ,times.toString());  // Outputs: "4m 15s"




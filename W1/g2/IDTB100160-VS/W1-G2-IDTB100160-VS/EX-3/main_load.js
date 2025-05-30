import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
await raceResultService.loadFromFile("./data/raceScores.json");

// Print the results in a formatted way
console.log("Participant ID Sport time");
raceResultService.raceResults.forEach(result => {
  console.log(`${result.participant_id} ${result.sport} ${result.time.toString()}`);
});
import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("./data/raceScores.json");

// Print the resuts
for (const result of raceResultService.raceResults) {
    console.log(`Participant: ${result.participant_id}`);
    console.log(`Sport: ${result.sport}`);
    console.log(`Time: ${result.time.toString()}`); //  Use .toString()
    console.log('---------------------------------');
}

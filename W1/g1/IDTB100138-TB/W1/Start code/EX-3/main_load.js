import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("./data/raceScores.json");

RaceResultsService.
// Print the resuts
console.log(raceResultService.raceResults);

import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("/Users/nikachhun/Documents/Year 2/Term_3/Backend-Development/WEEK-01/start-code/EX-3/data/raceScores.json");

// Print the resuts
console.log(raceResultService.raceResults);

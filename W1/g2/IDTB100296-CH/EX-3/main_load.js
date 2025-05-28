import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file - fixed path to match where main_init.js saves the file
raceResultService.loadFromFile("./data/raceScores.json");

// Print the results
console.log(raceResultService.raceResults);
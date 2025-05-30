import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
if (raceResultService.loadFromFile("./data/raceScores.json")) {
  console.log("Race results loaded successfully:");

  // Print the results in minutes and seconds
  raceResultService.raceResults.forEach((result) => {
    console.log(result.toString());
  });
} else {
  console.log("Failed to load race results.");
}

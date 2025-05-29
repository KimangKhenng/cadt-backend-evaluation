import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResultsService
const raceResultService = new RaceResultsService();

// Load results from file and print results
async function loadResults() {
  const success = await raceResultService.loadFromFile("./data/raceScores.json");
  if (success) {
    // Print the raw race results
    console.log(raceResultService.raceResults);

    // Print a specific result for better readability
    const time = raceResultService.getTimeForParticipant("participant1", "swim");
    console.log("Participant1 swim time:", time ? time.toString() : "Not found"); // Expected: 2m 30s
  } else {
    console.log("Failed to load race results.");
  }
}

loadResults();
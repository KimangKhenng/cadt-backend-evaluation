import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResultsService
const raceResultService = new RaceResultsService();

// Load race results from file
const success = raceResultService.loadFromFile("./EX-3/data/raceScores.json");

if (success) {
  console.log("Race results loaded successfully.");

  // Query race time for participant1 swimming
  const swimTime = raceResultService.getTimeForParticipant("participant1", "swim");
  console.log(`Participant1 swim time: ${swimTime ? swimTime.toString() : "Not found"}`);

  // Query race time for participant1 running
  const runTime = raceResultService.getTimeForParticipant("participant1", "run");
  console.log(`Participant1 run time: ${runTime ? runTime.toString() : "Not found"}`);

  // Query total time for participant1
  const totalTime = raceResultService.getTotalTimeForParticipant("participant1");
  console.log(`Participant1 total time: ${totalTime.toString()}`);

} else {
  console.error("Failed to load race results.");
}

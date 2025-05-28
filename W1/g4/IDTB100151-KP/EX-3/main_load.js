import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("./data/raceScores.json");

// Print test result with participant 1
const participantId = "participant1";
const totalTime = raceResultService.getTotalTimeForParticipant(participantId);

if (totalTime._totalSeconds > 0) {
    console.log(`Total time for ${participantId}: ${totalTime.toString()}`);
  } else {
    console.log(`No results found for ${participantId}`);
}
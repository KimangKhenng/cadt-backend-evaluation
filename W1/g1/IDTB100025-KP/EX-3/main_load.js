import { RaceResultsService } from "./service/RaceResultsService.js";

const raceResultService = new RaceResultsService();

raceResultService.loadFromFile("./data/raceScores.json")
  .then(success => {
    if (success) {
      console.log("Participant ID Sport Time");
      raceResultService.raceResults.forEach(result => {
        console.log(`${result.participantId} ${result.sportType} ${result.duration.toString()}`);
      });
    } else {
      console.log("Failed to load results (see previous error)");
    }
  })
  .catch(error => {
    console.error("Failed to process results:", error);
  });
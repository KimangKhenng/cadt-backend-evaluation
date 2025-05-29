import { Duration } from "./model/Duration.js";
import { RaceResultsService } from "./service/RaceResultsService.js";
import { RaceResult } from "./model/RaceResult.js";

// Initialize RaceResultsService
const raceResultService = new RaceResultsService();

// Add race results
raceResultService.addRaceResult(new RaceResult("participant1", "swim", Duration.fromMinutesAndSeconds(2, 30)));
raceResultService.addRaceResult(new RaceResult("participant1", "run", Duration.fromMinutesAndSeconds(1, 45)));
raceResultService.addRaceResult(new RaceResult("participant2", "swim", Duration.fromMinutesAndSeconds(3, 15)));

// Save results to file (await the async operation)
async function saveResults() {
  await raceResultService.saveToFile("./data/raceScores.json");
  
  // Write the total time for participant1
  const totalTime = raceResultService.getTotalTimeForParticipant("participant1");
  console.log(totalTime.toString()); // Expected: 4m 15s
}

saveResults();
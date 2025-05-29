import { Duration } from "./model/Duration.js";
import { RaceResultsService } from "./service/RaceResultsService.js";
import { RaceResult } from "./model/RaceResult.js";

// Initialize RaceResultsService
const raceResultService = new RaceResultsService();
 
raceResultService.addRaceResult(new RaceResult("participant1", "swim",  Duration.fromMinutesAndSeconds(2, 30)));
raceResultService.addRaceResult(new RaceResult("participant1", "run",  Duration.fromMinutesAndSeconds(1, 45)));
raceResultService.addRaceResult(new RaceResult("participant2", "swim",  Duration.fromMinutesAndSeconds(3, 15)));


console.log("All Race Results:", raceResultService.raceResults);

raceResultService.saveToFile("./data/raceScores.json");

const TotalTime = raceResultService.getTotalTimeForParticipant("participant1");
if (TotalTime) {
  console.log(totalTime.toString()); // Expected: "4m 15s"
} else {
  console.error("No results found for participant1");
}

console.log(raceResultService.getTotalTimeForParticipant("participant1").toString());       // Expected : 4m 15s  


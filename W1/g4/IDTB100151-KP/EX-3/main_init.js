import Duration from "./model/Duration.js";
import { RaceResultsService } from "./service/RaceResultsService.js";
import { RaceResult } from "./model/RaceResult.js";

const raceResultService = new RaceResultsService();

raceResultService.addRaceResult(
  new RaceResult("participant1", "swim", Duration.fromMinutesAndSeconds(2, 30))
);
raceResultService.addRaceResult(
  new RaceResult("participant1", "run", Duration.fromMinutesAndSeconds(1, 45))
);
raceResultService.addRaceResult(
  new RaceResult("participant2", "swim", Duration.fromMinutesAndSeconds(3, 15))
);

raceResultService.saveToFile("./data/raceScores.json");

console.log(
  raceResultService.getTotalTimeForParticipant("participant1").toString()
); // Expected: "4m 15s"
// main_init.js
import { Duration } from "./model/Duration.js";
import { RaceResult } from "./model/RaceResult.js";
import { RaceResultsService } from "./service/RaceResultsService.js";

const raceManager = new RaceResultsService();

raceManager.addRaceResult(new RaceResult("participant1", "swim", Duration.fromMinutesAndSeconds(2, 30)));
raceManager.addRaceResult(new RaceResult("participant1", "run", Duration.fromMinutesAndSeconds(1, 45)));
raceManager.addRaceResult(new RaceResult("participant2", "swim", Duration.fromMinutesAndSeconds(3, 15)));

// Save to file
raceManager.saveToFile("./data/raceScores.json");

console.log("Data saved successfully!");

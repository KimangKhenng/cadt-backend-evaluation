import { RaceResultsService } from "./service/RaceResultsService.js";
import Duration from "./model/Duration.js";
import { RaceResult } from "./model/RaceResult.js";
// Initialize RaceResults
const raceResultService = new RaceResultsService();
const participant1Duration = Duration.fromMinutesAndSeconds(2, 30); // 2 minutes and 30 seconds
const participant1 = new RaceResult("P001", "swim", participant1Duration);


// Load results from file
raceResultService.loadFromFile("./race-scores/data/raceScores.json");

// Print the resuts
console.log(raceResultService.raceResults);

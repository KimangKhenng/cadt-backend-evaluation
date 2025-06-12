import { RaceResultsService } from "./service/RaceResultsService.js";
import { Duration } from "./model/Duration.js";

// Initialize service
const raceResultService = new RaceResultsService();

// Load race results
raceResultService.loadFromFile("./data/raceScores.json");

// Retrieve time for participant1 swim
const swimTime = raceResultService.getTimeForParticipant("participant1", "swim");
console.log(swimTime ? swimTime.toString() : "No result found"); // "2m 30s"

// Total time for participant1
const totalTime = raceResultService.getTotalTimeForParticipant("participant1");
console.log(totalTime.toString()); // "4m 15s"

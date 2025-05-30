// main_load.js
import { RaceResultsService } from "./service/RaceResultsService.js";

const raceManager = new RaceResultsService();
raceManager.loadFromFile("./data/raceScores.json");

// Retrieve participant1's swim time
const time1 = raceManager.getTimeForParticipant("participant1", "swim");
console.log(time1.toString()); // Should print "2m 30s"

// Retrieve participant1's total time
const totalTime1 = raceManager.getTotalTimeForParticipant("participant1");
console.log(totalTime1.toString()); // Should print "4m 15s"

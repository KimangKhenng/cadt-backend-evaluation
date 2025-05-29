import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("./data/raceScores.json");

// Print the resuts
console.log(raceResultService.raceResults);
console.log("Time for participant 1 (2 races): ", raceResultService.getTotalTimeForParticipant("participant1"))
console.log("Time for participant 2 (1 race): ", raceResultService.getTotalTimeForParticipant("participant2"))
console.log("Time for participant 1 (swim): ", raceResultService.getTimeForParticipant("participant1", "swim"))
console.log("Time for participant 1 (run): ", raceResultService.getTimeForParticipant("participant1", "run"))
console.log("Time for participant 2 (swim): ", raceResultService.getTimeForParticipant("participant2", "swim"))


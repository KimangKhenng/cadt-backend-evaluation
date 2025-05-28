import { Duration } from "./model/Duration.js";
import { RaceResult } from "./model/RaceResult.js";
import RaceResultsService from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();
raceResultService.loadFromFile("./race-scores/data/raceScores.json");

// Retrieve time for a participant and sport
const time1 = raceResultService.getTimeForParticipant('participant1', 'swim');
console.log('Time for participant1 (swim):', time1 ? time1.toString() : 'Not found'); // "2m 30s"


const totalTime1 = raceResultService.getTotalTimeForParticipant('participant1');
console.log('Total time for participant1:', totalTime1.toString()); // "4m 15s"

raceResultService.raceResults.forEach(result => {
  console.log(`${result.participantId} - ${result.sport}: ${result.duration.toString()}`);
});
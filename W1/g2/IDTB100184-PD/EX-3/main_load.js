import RaceResultsService from './service/RaceResultsService.js';

const raceManager = new RaceResultsService();
raceManager.loadFromFile('./data/raceScores.json');

const time1 = raceManager.getTimeForParticipant('participant1', 'swim');
console.log(time1?.toString() ?? "No result"); // "2m 30s"

const totalTime1 = raceManager.getTotalTimeForParticipant('participant1');
console.log(totalTime1.toString()); // "4m 15s"

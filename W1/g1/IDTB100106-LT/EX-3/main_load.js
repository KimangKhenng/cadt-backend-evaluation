import { RaceResultsService } from "./service/RaceResultsService.js";

const raceResultService = new RaceResultsService();
raceResultService.loadFromFile("./data/raceScores.json");
console.log(raceResultService.raceResults);
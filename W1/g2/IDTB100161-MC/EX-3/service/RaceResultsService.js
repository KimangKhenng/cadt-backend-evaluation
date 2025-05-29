import fs from "fs";
import { RaceResult } from "../model/RaceResult.js";
import { Duration } from "../model/Duration.js";

class RaceResultsService {
  constructor() {
    this._raceResults = [];
  }

  addRaceResult(result) {
    this._raceResults.push(result);
  }

  saveToFile(filePath) {
    try {
      const jsonData = JSON.stringify(this._raceResults, null, 2);
      fs.writeFileSync(filePath, jsonData, 'utf8');
    } catch (err) {
      console.error("Failed to save race results:", err);
    }
  }

  loadFromFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const rawResults = JSON.parse(data);

      this._raceResults = rawResults.map(result =>
        new RaceResult(
          result.participantId,
          result.sport,
          new Duration(result.duration)
        )
      );

      return true;
    } catch (err) {
      console.error("Failed to load race results:", err);
      return false;
    }
  }

  getTimeForParticipant(participantId, sport) {
    const result = this._raceResults.find(
      (r) => r.participantId === participantId && r.sport === sport
    );
    return result ? result.duration : null;
  }

  getTotalTimeForParticipant(participantId) {
    const participantResults = this._raceResults.filter(
      (r) => r.participantId === participantId
    );

    if (participantResults.length === 0) {
      return null;
    }

    const totalDuration = participantResults.reduce((total, result) => {
      return total.plus(result.duration);
    }, new Duration());

    return totalDuration;
  }
}

export default RaceResultsService;

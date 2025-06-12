import fs from "fs";
import { RaceResult } from "../model/RaceResult.js";
import { Duration } from "../model/Duration.js";  
/**
 * Service to manage race scores.
 */
export class RaceResultsService {
  _raceResults = [];

  /**
   * Adds a new race result.
   * @param {RaceResult} result
   */
  addRaceResult(result) {
    this._raceResults.push(result);
  }

  /**
   * Saves race results to a JSON file.
   * @param {string} filePath
   */
  saveToFile(filePath) {
    const data = JSON.stringify(this._raceResults, null, 2);
    fs.writeFileSync(filePath, data, "utf8");
  }

  /**
   * Loads race results from a JSON file.
   * @param {string} filePath
   * @returns {boolean}
   */
  loadFromFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const rawArray = JSON.parse(data);
      this._raceResults = rawArray.map(obj => RaceResult.fromJSON(obj));
      return true;
    } catch (err) {
      console.error("Error loading file:", err.message);
      return false;
    }
  }

  /**
   * Get the race time for a participant and sport.
   * @param {string} participantId
   * @param {string} sport
   * @returns {Duration|null}
   */
  getTimeForParticipant(participantId, sport) {
    const result = this._raceResults.find(
      r => r.participantId === participantId && r.sport === sport
    );
    return result ? result.duration : null;
  }

  /**
   * Get total race time for a participant.
   * @param {string} participantId
   * @returns {Duration}
   */
  getTotalTimeForParticipant(participantId) {
    const participantResults = this._raceResults.filter(
      r => r.participantId === participantId
    );
    if (participantResults.length === 0) return new Duration(0);

    return participantResults.reduce(
      (total, current) => total.plus(current.duration),
      new Duration(0)
    );
  }
}

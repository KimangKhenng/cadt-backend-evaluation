
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs";

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    const data = JSON.stringify(this._raceResults.map(result => ({
      participantId: result.participantId,
      sport: result.sport,
      duration: result.duration.totalSeconds // save totalSeconds only
    })), null, 2);
      fs.writeFileSync(filePath, data, 'utf8');
    }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const rawList = JSON.parse(data);
      this._raceResults = rawList.map(item => 
        new RaceResult(item.participantId, item.sport, new Duration(item.duration))
      );
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
       // TODO
      const result = this._raceResults.find(r => r.participantId === participantId && r.sport === sport);
      return result ? result.duration : null;
    
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        const results = this._raceResults.filter(r => r.participantId === participantId);
  return results.reduce((total, r) => total.plus(r.duration), new Duration(0));
  }
}

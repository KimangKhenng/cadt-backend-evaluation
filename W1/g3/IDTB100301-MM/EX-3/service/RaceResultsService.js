import fs from 'fs';
import path from 'path';
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";

/**
 * This class handles the race results management system.
 */
class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  /**
   * Gets the list of race results.
   * @returns {Array<RaceResult>} The race results array.
   */
  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The race result.
   */
  addRaceResult(result) {
    if (!(result instanceof RaceResult)) {
      throw new Error('Result must be a RaceResult instance');
    }
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    const data = JSON.stringify(
      this._raceResults.map(result => ({
        participantId: result.participantId,
        sport: result.sport,
        duration: result.duration._totalSeconds
      })),
      null,
      2
    );
    fs.writeFileSync(filePath, data, 'utf8');
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const parsed = JSON.parse(data);
      this._raceResults = parsed.map(item => 
        new RaceResult(
          item.participantId,
          item.sport,
          new Duration(item.duration)
        )
      );
      return true;
    } catch (err) {
      console.error('Error loading file:', err);
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
    const result = this._raceResults.find(
      r => r.participantId === participantId && r.sport === sport
    );
    return result ? result.duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const totalSeconds = this._raceResults
      .filter(r => r.participantId === participantId)
      .reduce((sum, r) => sum + r.duration._totalSeconds, 0);
    return totalSeconds > 0 ? new Duration(totalSeconds) : null;
  }
}

export default RaceResultsService;
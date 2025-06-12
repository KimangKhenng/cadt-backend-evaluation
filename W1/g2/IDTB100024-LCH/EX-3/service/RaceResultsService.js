import fs from "fs";
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";

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
   * @param {RaceResult} result - The race result.
   */
  addRaceResult(result) {
    // TODO
    if (result instanceof RaceResult) {
      this._raceResults.push(result);
    }
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    const data = JSON.stringify(this._raceResults, null, 2);
    fs.writeFileSync(filePath, data, 'utf8');
    return true;
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    const content = fs.readFileSync(filePath, "utf-8");
    this._raceResults = JSON.parse(content).map(
      (result) => {
        return new RaceResult(
          result._participantId,
          result._sport,
          Duration.fromMinutesAndSeconds(result._duration._totalSeconds / 60, result._duration._totalSeconds % 60)
        );
      });
      return true;
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
    // TODO
    const found = this._raceResults.find(
      (r) => r._participantId === participantId && r._sport === sport
    );
    return found ? found._duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    // TODO
    const results = this._raceResults.filter(
      (r) => r._participantId === participantId
    );

    if (results.length === 0) {
      return null;
    }

    const totalSeconds = results.reduce(
      (sum, r) => sum + r._duration._totalSeconds,
      0
    );

    return new Duration(totalSeconds);
  }
}

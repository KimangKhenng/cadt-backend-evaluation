import fs from 'fs';
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";

/**
 * This class handles the race results management system.
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
   * @param {RaceResult} result - The race result to add.
   */
  addRaceResult(result) {
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    const data = JSON.stringify(this._raceResults, null, "\t");
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
      this._raceResults = JSON.parse(data).map(rawResult => RaceResult.fromObjectToResult(rawResult));
      return true;

    } catch (e) {
      console.error(e);
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
    const selectedResult = this._raceResults.find(result => result.participant_id === participantId && result.sport === sport);
    return selectedResult ? new Duration(selectedResult.time._totalSeconds) : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration} The total Duration object if found, otherwise a Duration of 0 seconds.
   */
  getTotalTimeForParticipant(participantId) {
    const selectedResults = this._raceResults.filter(result => result.participant_id === participantId);
    let totalDuration = new Duration(0);
    selectedResults.forEach(result => {totalDuration = totalDuration.plus(result.time)});
    return totalDuration;
  }
}
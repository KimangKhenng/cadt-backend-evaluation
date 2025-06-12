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
   * @param {RaceResult} result - The race result.
   */
  addRaceResult(result) {
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    const data = JSON.stringify(this._raceResults.map(r => ({
      participantId: r.participantId,
      sport: r.sport,
      duration: r.duration._totalSeconds
    })), null, 2); // Pretty print

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
      const jsonArray = JSON.parse(data);

      this._raceResults = jsonArray.map(item => new RaceResult(
        item.participantId,
        item.sport,
        new Duration(item.duration)
      ));

      return true;
    } catch (error) {
      console.error("Error loading race results:", error.message);
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
    const result = this._raceResults.find(r =>
      r.participantId === participantId && r.sport === sport
    );
    return result ? result.duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration} The total Duration object.
   */
  getTotalTimeForParticipant(participantId) {
    const participantResults = this._raceResults.filter(r => r.participantId === participantId);

    if (participantResults.length === 0) {
      return new Duration(0); // Return zero duration if none found
    }

    return participantResults.reduce((total, current) => total.plus(current.duration), new Duration(0));
  }
}

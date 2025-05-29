import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs/promises";

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
  async saveToFile(filePath) {
    try {
      const data = JSON.stringify(this._raceResults, null, 2);
      await fs.writeFile(filePath, data);
    } catch (error) {
      console.error("Error saving to file:", error);
    }
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  async loadFromFile(filePath) {
    try {
      const data = await fs.readFile(filePath, "utf8");
      const jsonArray = JSON.parse(data);
      this._raceResults = jsonArray.map(RaceResult.fromJSON);
      return true;
    } catch (error) {
      console.error("Error loading from file:", error);
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
      (r) => r.participantId === participantId && r.sport === sport
    );
    return result ? result.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const participantResults = this._raceResults.filter(
      (r) => r.participantId === participantId
    );
    if (participantResults.length === 0) {
      return null;
    }
    const totalSeconds = participantResults.reduce(
      (sum, result) => sum + result.time._totalSeconds,
      0
    );
    return new Duration(totalSeconds);
  }
}
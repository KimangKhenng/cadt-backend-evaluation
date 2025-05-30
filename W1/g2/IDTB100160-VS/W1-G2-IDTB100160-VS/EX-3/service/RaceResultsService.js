import { promises as fs } from "fs";
import { RaceResult } from "../model/RaceResult.js";
import { Duration } from "../model/Duration.js";

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

  /**
   * Gets the list of race results.
   * @returns {Array<RaceResult>} The race results.
   */
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
    const data = this._raceResults.map(result => ({
      participant_id: result.participant_id,
      sport: result.sport,
      time: { _totalSeconds: result.time.totalSeconds }
    }));

    try {
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
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
      const content = await fs.readFile(filePath, "utf8");
      const data = JSON.parse(content);

      this._raceResults = data.map(item => new RaceResult(
        item.participant_id,
        item.sport,
        Duration.fromTotalSeconds(item.time._totalSeconds)
      ));
      
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
    const result = this._raceResults.find(r => 
      r.participant_id === participantId && r.sport === sport
    );
    return result ? result.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const results = this._raceResults.filter(r => r.participant_id === participantId);
    if (results.length === 0) {
      return null;
    }
    let totalSeconds = results.reduce((sum, r) => sum + r.time.totalSeconds, 0);
    return Duration.fromTotalSeconds(totalSeconds);
  }
}
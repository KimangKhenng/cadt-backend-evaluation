import fs from "fs/promises";
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
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    if (result instanceof RaceResult) {
      this._raceResults.push(result);
    } else {
      throw new Error("Invalid RaceResult object");
    }
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  async saveToFile(filePath) {
    // TODO
    const data = this._raceResults.map(r => ({
      participantId: r.participantId,
      sportType: r.sportType,
      duration: r.duration.totalSeconds, // save raw seconds
    }));

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  async loadFromFile(filePath) {
    try {
      const data = await fs.readFile(filePath, "utf8");
      const parsed = JSON.parse(data);

      this._raceResults = parsed.map(item =>
        new RaceResult(
          item.participantId,
          item.sportType,
          new Duration(item.duration)
        )
      );
      return true;
    } catch (err) {
      console.error("Error loading from file:", err);
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
       const result = this._raceResults.find(
        r => r.participantId === participantId && r.sportType === sport
      );
      return result ? result.duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const results = this._raceResults.filter(
      result => result._participantId === participantId
    );
  
    if (results.length === 0) return null;
  
    return results
      .map(r => r._duration)
      .reduce((acc, dur) => acc.plus(dur));
  }
}
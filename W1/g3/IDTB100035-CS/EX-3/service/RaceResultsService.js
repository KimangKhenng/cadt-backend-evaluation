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
    const data = this._raceResults.map(r => ({
      participant_id: r.participant_id,
      sport: r.sport,
      time: { _totalSeconds: r.time._totalSeconds }
    }));
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const arr = JSON.parse(data);
      this._raceResults = arr.map(
        r => new RaceResult(r.participant_id, r.sport, new Duration(r.time._totalSeconds))
      );
      return true;
    } catch (error) {
      console.error("Error loading file:", error);
      return false;
    }
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participant_id - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participant_id, sport) {
    const result = this._raceResults.find(
      r => r.participant_id === participant_id && r.sport === sport
    );
    return result ? result.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participant_id - The ID of the participant.
   * @returns {Duration} The total Duration object.
   */
  getTotalTimeForParticipant(participant_id) {
    const results = this._raceResults.filter(
      r => r.participant_id === participant_id
    );
    if (results.length === 0) return new Duration(0);
    return results
      .map(r => r.time)
      .reduce((acc, curr) => acc.plus(curr), new Duration(0));
  }
}
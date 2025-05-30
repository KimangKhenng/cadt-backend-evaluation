/** @format */

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
    const jsonData = JSON.stringify(this._raceResults, null, 2);
    fs.writeFile(filePath, jsonData, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Data saved to file successfully.");
    });
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const rawResults = JSON.parse(data);

      // Reconstruct RaceResult and Duration objects
      this._raceResults = rawResults.map(
        (rawResult) =>
          new RaceResult(
            rawResult.participant,
            rawResult.sportType,
            new Duration(rawResult.raceTime._totalSeconds)
          )
      );

      console.log("Data loaded from file successfully.");
      return true;
    } catch (err) {
      console.error("Error reading file:", err);
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
      (result) =>
        result.participant === participantId && result.sportType === sport
    );
    if (result && result.raceTime instanceof Duration) {
      return result.raceTime; // Valid Duration object
    }
    return null; // Not found or invalid raceTime
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const results = this._raceResults.filter(
      (result) => result.participant === participantId
    );
    return results.reduce((total, result) => {
      if (result.raceTime instanceof Duration) {
        return total.plus(result.raceTime); // Valid Duration object
      }
      return total; // Skip invalid raceTime
    }, new Duration(0)); // Start with 0 duration
  }
}

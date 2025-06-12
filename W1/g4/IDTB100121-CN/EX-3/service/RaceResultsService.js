
import  Duration  from "../model/Duration.js";
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
    const fs = require("fs");
    const data = JSON.stringify(this._raceResults, null, 2); // Convert to JSON string
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Data saved to file successfully.");
      }
    });
  
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try {
      const data = fs.readFileSync(filePath, "utf8"); // Read the file synchronously
      this._raceResults = JSON.parse(data); // Parse the JSON data
      return true; // Loading was successful
    } catch (error) {
      console.error("Error loading data from file:", error);
      return false; // Loading failed
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
      (result) =>
        result.participantId === participantId && result.sport === sport
    );
    return result ? result.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
    const results = this._raceResults.filter(
      (result) => result.participantId === participantId
    );
    if (results.length === 0) {
      return null; // No results found for the participant
    }
    const totalSeconds = results.reduce(
      (sum, result) => sum + result.time._totalSeconds,
      0
    );
    return new Duration(totalSeconds);
  }
}

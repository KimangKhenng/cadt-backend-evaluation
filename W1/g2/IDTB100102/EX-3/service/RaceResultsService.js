
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
    if (!(result instanceof RaceResult)) {
      throw new Error("Invalid race result. Must be an instance of RaceResult.");
    }
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // Convert the list of race results into a JSON-formatted string
    const data = JSON.stringify(
      this._raceResults.map((result) => ({
        participantId: result.participantId,
        sportType: result.sportType,
        duration: result.duration._totalSeconds, // Save duration as total seconds
      })),
      null,
      2 // Pretty-print with 2 spaces
    );
  
    // Save the JSON string to the specified file
    fs.writeFileSync(filePath, data, "utf8");
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    try {
      // Read the string from the JSON file
      const data = fs.readFileSync(filePath, "utf8");
  
      // Convert the string into a list of race results
      const parsedData = JSON.parse(data);
  
      // Map the parsed data to RaceResult instances
      this._raceResults = parsedData.map(
        (item) =>
          new RaceResult(
            item.participantId,
            item.sportType,
            new Duration(item.duration) // Convert duration back to a Duration instance
          )
      );
  
      return true; // Indicate successful loading
    } catch (error) {
      console.error("Error loading race results from file:", error);
      return false; // Indicate failure
    }
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
    // Use the find method to locate the race result for the given participant and sport
    const result = this._raceResults.find(
      (r) => r.participantId === participantId && r.sportType === sport
    );
  
    // Return the duration if found, otherwise return null
    return result ? result.duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    // Use the filter method to find all race results for the given participant ID
    const participantResults = this._raceResults.filter(
      (r) => r.participantId === participantId
    );
  
    // If no results are found, return a Duration of 0 seconds
    if (participantResults.length === 0) {
      return new Duration(0);
    }
  
    // Sum the durations of all results
    const totalSeconds = participantResults.reduce(
      (sum, r) => sum + r.duration._totalSeconds,
      0
    );
  
    // Return the total duration as a new Duration instance
    return new Duration(totalSeconds);
  }
}

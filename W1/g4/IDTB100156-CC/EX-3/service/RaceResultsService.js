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
    try {
      // Convert the race results to JSON string
      const data = JSON.stringify(this._raceResults, null, 2); // `null, 2` adds indentation for readability

      // Save the JSON string to the specified file path
      fs.writeFileSync(filePath, data, 'utf8');

      console.log("Race results saved to", filePath);
    } catch (error) {
      console.error("Error saving race results to file:", error);
    }
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const rawResults = JSON.parse(data);
  
      this._raceResults = rawResults.map(item => {
        const duration = new Duration(item.time._totalSeconds);
        return new RaceResult(item.participant_id, item.sport, duration);
      });
  
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
       // TODO
      const result = this._raceResults.find(
        (raceResult) => raceResult.participant_id === participantId && raceResult.sport === sport
      );
    
      // Return the duration if found, else null
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
        (raceResult) => raceResult.participant_id === participantId
      );

      if (results.length === 0) {
        return new Duration(0);
      }

      const total = results.reduce(
        (sum, result) => sum.plus(result.time),
        new Duration(0)
      );

      return total;
  }
}

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
    // TODO
    if (!(result instanceof RaceResult)) {
      console.warn("Attempting to add a non-RaceResult object. This might lead to unexpected results.");
      return;
    }
    this._raceResults.push(result);

    
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    try {
      const data = JSON.stringify(this._raceResults, null, 2);
      fs.writeFileSync(filePath, data, "utf8");
      console.log("Race results saved successfully.");
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
      const data = fs.readFileSync(filePath, "utf8");
      const parsedData = JSON.parse(data);
      this._raceResults = parsedData.map(
        (item) => new RaceResult(item._participantId, item._sportType, item._duration)
      );
      console.log("Race results loaded successfully.");
      return true;
    } catch (error) {
      console.error("Error loading race results from file:", error);
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
      (result) => result._participantId === participantId && result._sportType === sport
    );
    return result ? result._duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration} The total Duration object 
   */
  getTotalTimeForParticipant(participantId) {
        /* TODO
        - Use the function filter on the participant array to find all participant time for given ID
        - Sum the durations (using the Duration method) and return it. Return a Duration of 0 seconds if
        nothing found*/
    const results = this._raceResults.filter((result) => result._participantId === participantId);
    if (results.length === 0) {
      return new Duration(0); // Return a Duration of 0 seconds if nothing found
    }
    return results.reduce((total, result) => total.plus(result._duration), new Duration(0));
    
    


  }
}

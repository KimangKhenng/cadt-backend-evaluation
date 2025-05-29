
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from 'node:fs';
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

    const currentData = fs.readFileSync(filePath, "utf8");
    const data = JSON.stringify(this._raceResults); 
    if (currentData === data) {
      return; // No changes, avoid writing
    }
    fs.writeFileSync(filePath, data, "utf8");
  }
  

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
      const data = fs.readFileSync(filePath, "utf8"); 
      try {
        this._raceResults = JSON.parse(data); 
      }
      catch (error) {
        console.error("Error loading data from file:", error);
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
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
    const results = this._raceResults.filter((result) => result._participantId === participantId);
    const totalDuration = results.reduce((acc, result) => acc.plus(result._duration), new Duration(0));
    if(results.length === 0) {
      return new Duration(0); 
    }
    return totalDuration; 
  }
}

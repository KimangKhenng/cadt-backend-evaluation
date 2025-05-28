
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
    fs.writeFileSync(filePath, JSON.stringify(this._raceResults), (err) => {
      if (err) {
        console.error("Error writing to file", err);
      } else {
        console.log("Data saved successfully");
      }
    })
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */

  loadFromFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const parsed = JSON.parse(data);
  
      this._raceResults = parsed.map(item =>
        new RaceResult(item._id, item._sportType, item._duration) // assuming duration in seconds
      );
  
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
    // TODO
    const result = this._raceResults;
    const raceResult = result.find(r => r.getID() === participantId && r.getSportType() === sport);
    if (raceResult) {
      return raceResult.getDuration();
    } else {
      return null;
    }
  }


  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const raceResults = this._raceResults.filter(r => r.getID() === participantId);
  
    if (raceResults.length === 0) {
      return null; // or return new Duration(0, 0, 0) if you prefer
    }
  
    const totalDuration = raceResults.reduce((acc, r) => {
      return acc.plus(r.getDuration());
    }, new Duration(0));
  
    return totalDuration;
  }
}

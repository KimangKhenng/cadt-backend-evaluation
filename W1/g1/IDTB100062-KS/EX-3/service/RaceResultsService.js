import Duration from "../model/Duration.js";
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
    // TODO
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // T1DO
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    //TODO
    const data = JSON.stringify(
      this._raceResults.map((r) => ({
        participantId: r.participantId,
        sportType: r.sportType,
        totalSeconds: r.duration.totalSeconds
      })),
      null,
      2
    );
    fs.writeFileSync(filePath, data);
  }
  

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    //TODO
    try {
      const data = fs.readFileSync(filePath, "utf8");
      const parsedData = JSON.parse(data);
      this._raceResults = parsedData.map(
        (item) =>
          new RaceResult(
            item.participantId,
            item.sportType,
            new Duration(item.totalSeconds)
          )
      );
      return true;
    } catch (error) {
      console.error("Error loading file:", error);
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
      (r) => r.participantId === participantId && r.sportType === sport
    );
    return result ? result.duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */

  getTotalTimeForParticipant(participantId) {
    // TODO
    const results = this._raceResults.filter(
      (r) => r.participantId === participantId
    );
    if (results.length === 0) return null;

    return results.reduce((total, r) => total.plus(r.duration), new Duration(0));
  }
}
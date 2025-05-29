import fs from "node:fs";
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
      throw new Error("Invalid RaceResult");
    }
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    const data = this._raceResults.map(result => ({
      participant: result.participant,
      sport: result.sport,
      time: result.time._totalSeconds // save duration as seconds
    }));
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try {
      const raw = fs.readFileSync(filePath, "utf8");
      const parsed = JSON.parse(raw);
      this._raceResults = parsed.map(entry =>
        new RaceResult(
          entry.participant,
          entry.sport,
          new Duration(entry.time)
        )
      );
      return true;
    } catch (error) {
      console.error("Failed to load file:", error);
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
        r => r.participant === participantId && r.sport === sport
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
          r => r.participant === participantId
        );
        if (results.length === 0) return null;
      
        return results
          .map(r => r.time)
          .reduce((acc, time) => acc.plus(time), new Duration(0));
  }
}

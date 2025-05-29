
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
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    const data = this._raceResults.map(result => ({
      participant_id: result.participantId,
      sport: result.sport,
      time: { _totalSeconds: result.time._totalSeconds },
    }));
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try {
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      this._raceResults = data.map(
        item =>
          new RaceResult(
            item.participant_id,
            item.sport,
            new Duration(item.time._totalSeconds)
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
       r => r.participantId === participantId && r.sport === sport
    );
    return result ? result.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const results = this._raceResults.filter(r => r.participantId === participantId);
    if (results.length === 0){
      return new Duration(0);
    };
  
    const totalSeconds = results.reduce(
      (sum, r) => sum + r.time._totalSeconds,
      0
    );
    return new Duration(totalSeconds);
  }
}

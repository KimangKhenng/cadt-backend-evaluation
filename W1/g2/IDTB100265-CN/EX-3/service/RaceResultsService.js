
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
    const plainResults = this._raceResults.map(result => ({
      participant_id: result.participant_id,
      sport: result.sport,
      time: {
        _totalSeconds: result.time._totalSeconds
      }
    }));
    
    fs.writeFileSync(filePath, JSON.stringify(plainResults, null, 2), 'utf8');

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
      const json = JSON.parse(data);

      this._raceResults = json.map(item =>
        new RaceResult(
          item.participant_id,
          item.sport,
          new Duration(item.time._totalSeconds)
        )
      );

      return true;
    } catch (error) {
      console.error('Error loading from file:', error);
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
    const found = this._raceResults.find(r =>
      r.participant_id === participantId && r.sport === sport
    );
    return found ? found.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const results = this._raceResults.filter(r => r.participant_id === participantId);

    if (results.length === 0) {
      return null;
    }

    let totalDuration = new Duration(0);

    for (const result of results) {
      totalDuration = totalDuration.plus(result.time);
    }

    return totalDuration;
  }

}

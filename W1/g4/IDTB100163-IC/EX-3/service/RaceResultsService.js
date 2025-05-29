import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import { writeFile, readFile } from 'fs/promises';

/**
 * This class handles the race results management system.
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
  async saveToFile(filePath) {
    try {
      const data = JSON.stringify(this._raceResults.map(r => r.toJSON()));
      await writeFile(filePath, data, 'utf8');
    } catch (err) {
      console.error("Error saving to file:", err);
    }
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  async loadFromFile(filePath) {
    try {
      const data = await readFile(filePath, 'utf8');
      const parsed = JSON.parse(data);
      this._raceResults = parsed.map(obj => RaceResult.fromJSON(obj));
      return true;
    } catch (err) {
      console.error("Error loading from file:", err);
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
    const result = this._raceResults.find(
      r => r.participantId === participantId && r.sport === sport
    );
    return result ? result.duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const participantResults = this._raceResults.filter(
      r => r.participantId === participantId
    );
    if (participantResults.length === 0) return null;

    let total = new Duration(0, 0, 0); // Assuming Duration(h, m, s)
    for (const r of participantResults) {
      total = total.add(r.duration); // Assumes Duration has an `add()` method
    }
    return total;
  }
}


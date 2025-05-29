import fs from 'fs';
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
    fs.writeFileSync(filePath, JSON.stringify(this._raceResults),'utf8');
    
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
      const jsonData = JSON.parse(data);
  
      this._raceResults = jsonData.map(obj => {
        const duration = new Duration(obj._time._totalSeconds);
        return new RaceResult(obj._participantId, obj._sport, duration);
      });
  
      return true;
    } catch (error) {
      console.error("Error loading from file:", error);
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
        r => r._participantId === participantId && r._sport === sport
      );
      return result ? result._time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        const participantResults = this._raceResults.filter(
          r => r._participantId === participantId
        );
      
        if (participantResults.length === 0) {
          return null;
        }
      
        const totalSeconds = participantResults.reduce(
          (sum, r) => sum + r._time._totalSeconds,
          0
        );
      
        return new Duration(totalSeconds);
  }
}

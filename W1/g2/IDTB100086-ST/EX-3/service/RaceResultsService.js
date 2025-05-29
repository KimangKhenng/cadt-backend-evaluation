import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from 'fs';

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
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    try {
      // Create directory if it doesn't exist
      const directory = filePath.substring(0, filePath.lastIndexOf('/'));
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }
      
      // Write file
      fs.writeFileSync(filePath, JSON.stringify(this._raceResults, null, 2));
      return true;
    } catch (error) {
      console.error(`Error saving file: ${error.message}`);
      return false;
    }
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(data);
      
      // Clear current results
      this._raceResults = [];
      
      // Convert JSON objects to RaceResult instances
      jsonData.forEach(item => {
        const time = new Duration(item.time._totalSeconds);
        const result = new RaceResult(item.participant_id, item.sport, time);
        this.addRaceResult(result);
      });
      
      return true;
    } catch (error) {
      console.error(`Error loading file: ${error.message}`);
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
      r => r.participant_id === participantId && r.sport === sport
    );
    return result ? result.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const participantResults = this._raceResults.filter(
      r => r.participant_id === participantId
    );
    
    if (participantResults.length === 0) {
      return null;
    }
    
    let totalDuration = new Duration(0);
    
    participantResults.forEach(result => {
      totalDuration = totalDuration.add(result.time);
    });
    
    return totalDuration;
  }
}
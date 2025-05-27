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
   * @param {RaceResult} result - The race result to add.
   */
  addRaceResult(result) {
    if (!(result instanceof RaceResult)) {
      throw new Error('Invalid argument: must be a RaceResult instance');
    }
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    const dataToSave = this._raceResults.map(result => ({
      participantId: result.participantId,
      sportType: result.sportType,
      duration: result.duration._totalSeconds
    }));
    const jsonData = JSON.stringify(dataToSave, null, 2);
    try {
      fs.writeFileSync(filePath, jsonData);
    } catch (error) {
      console.error('Error saving race results to file:', error);
      throw error;
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
      const parsedData = JSON.parse(data);
      this._raceResults = parsedData.map(item => 
        new RaceResult(
          item.participantId,
          item.sportType,
          new Duration(item.duration)
      )
      );
      return true;
    } catch (error) {
      console.error('Error loading race results from file:', error);
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
    const result = this._raceResults.find(race => 
      race.participantId === participantId && 
      race.sportType === sport
    );
    return result ? result.duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration} The total Duration object.
   */
  getTotalTimeForParticipant(participantId) {
    const participantResults = this._raceResults.filter(
      race => race.participantId === participantId
    );
    return participantResults.reduce(
      (total, current) => total.plus(current.duration),
      new Duration(0)
    );
  }
}
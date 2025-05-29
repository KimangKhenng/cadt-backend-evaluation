import fs from 'fs'
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
    this._raceResults.push(result)
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    const data = JSON.stringify(this._raceResults.map(result => result.toObject()), null, 2)
    try {
      fs.writeFileSync(filePath, data, 'utf8')
      console.log('Race results saved successfully!')
    } catch (err) {
      console.error('Error saving race results:', err)
    }
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    try {

      const data  = fs.readFileSync(filePath, 'utf8')
      this._raceResults = JSON.parse(data)
      return true

    } catch (e) {

      console.error(e)
      return false
    }
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {

    
    const result = this._raceResults.find(result => result.participant_id === participantId && result.sport === sport);

    const time = result.time._totalSeconds

    if (result) return new Duration(time)
  
    return null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const participantResult = this._raceResults.filter(result => result.id === participantId)
    const totalTime = participantResult.reduce((acc, result) => acc + result.duration.totalSeconds, 0);
    return new Duration(totalTime)
  }
}

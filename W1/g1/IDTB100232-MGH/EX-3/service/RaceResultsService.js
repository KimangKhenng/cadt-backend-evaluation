import fs from 'fs';
import  Duration  from "../model/Duration.js";
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
    this.raceResults.push(new RaceResult(result.participantId, result.sportType, result.duration));
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    try{
      const data = JSON.stringify(this.raceResults);
      fs.writeFileSync(filePath,data, 'utf-8');
    }catch (err) {
      console.error('Unable to save to file');
    }
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try{
      const data = fs.readFileSync(filePath, 'utf-8');
      this._raceResults = JSON.parse(data);
    }
    catch (err){
      console.error('Unable to read from file');
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
       const result = this._raceResults.find((entry) => entry.participantId === participantId && entry.sportType === sport);
       if(!result){
        return null;
       }
       return result.duration;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        const particicpantResult = this._raceResults.filter((entry) => entry.participantId === participantId);
        let totalTime = new Duration(0);
        for(const result of particicpantResult){
          totalTime = totalTime.plus(result.duration);
        }
        return totalTime;
  }
}


import  Duration  from "../model/Duration.js";
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
    const data = JSON.stringify(this._raceResults, null, 2);
    fs.writeFileSync(filePath, data, 'utf-8');
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try{
      const data = fs.readFileSync(filePath, 'utf8');
      this._raceResults = JSON.parse(data);

      return true;
      
    }catch (error) {
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
       const found = this._raceResults.find(element => {
        return element.participantId === participantId && element.sportType === sport;
     })
     return found ? found.duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        const result = this._raceResults.filter((element) => {
          return element.participantId === participantId;
        })
        if(result.length > 0){
          let totalDuration = new Duration(0);
          result.forEach((element) => {
            totalDuration = totalDuration.plus(element.duration);
          });
          return totalDuration;
        }
        else{
          return null;
        }
  
  }
}

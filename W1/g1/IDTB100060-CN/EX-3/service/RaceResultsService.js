
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
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    this.raceResults.push(result);

  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    const data = JSON.stringify(this.raceResults, null, 2);
    fs.writeFileSync(filePath, data, 'utf8');



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
      this._raceResults = JSON.parse(data);
      return true;
    } catch (e) {
      console.log("Error: ", e.message);
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
      const result = this.raceResults.find((result) => 
        result.participant_id === participantId && result.sport === sport
      );

      return result ? result.time.toString() : null;


  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        const filterParticipant = this.raceResults.filter((result) => result.participant_id === participantId);
        
        if (filterParticipant.length === 0) {
          return null;
        }

        let totalDuration = new Duration(0);
        for(let i = 0; i < filterParticipant.length; i++) {
          totalDuration = totalDuration.plus(filterParticipant[i].time);
        }

        return totalDuration;
         
  }
}

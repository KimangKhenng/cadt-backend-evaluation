
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


  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    this._raceResults.push(result)
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    const jsonData  = JSON.stringify(this._raceResults,null,2)
    fs.writeFileSync(filePath,jsonData, 'utf8')
  }


  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try{

      const data = fs.readFileSync(filePath,'utf8')
      
      this._raceResults = JSON.parse(data).map(result => {
        const { participant_id, sport, time } = result;
        return new RaceResult(participant_id, sport, time._totalSeconds);
      });
    }
    catch(error){
      console.log('error :',error)
      return false;
    }
    return true;
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
       // TODO
       const result = this._raceResults.find(raceResult => {
        return raceResult._participantId === participantId && raceResult._sportType === sport;
      });
  
      return result ? result._duration : null;
    
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        const participantResults = this._raceResults.filter(
          (raceResult) => raceResult._participantId === participantId
        );
        if (participantResults.length === 0) 
          return Duration.fromMinutesAndSeconds(0, 0);
    
        return participantResults.reduce((totalTime, raceResult) => 
          totalTime.plus(raceResult._duration), Duration.fromMinutesAndSeconds(0, 0));
      
  }
}

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
    this.raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    // try {
    //   // Convert race results to a serializable format
    //   const dataToSave = this._raceResults.map(result => ({
    //       participantId: result.participantId,
    //       sport: result.sport,
    //       duration: result.duration._totalSeconds // Assuming Duration stores seconds internally
    //   }));
      
    //   const jsonData = JSON.stringify(dataToSave, null, 2);
    //   fs.writeFileSync(filePath, jsonData, 'utf8');
    //   console.log('Race results saved successfully.');
    // } catch (error) {
    //     console.error('Error saving race results:', error);
    // }
    try {
      const data = JSON.stringify(this._raceResults, null, 2);
      fs.writeFileSync(filePath, data, 'utf8');
    } catch (error) {
        console.error('Error saving race results:', error);
    }
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
      const parsedData = JSON.parse(data);
      
      if (!Array.isArray(parsedData)) {
          throw new Error("Invalid data format - expected array");
      }

      this._raceResults = parsedData.map(item => {
          if (!item || !item.duration) {
              throw new Error("Invalid race result format");
          }
          return new RaceResult(
              item.participantId,
              item.sport,
              new Duration(item.duration.seconds)  // Changed to use 'seconds'
          );
      });
      
      return true;
    } catch (error) {
        console.error('Error loading race results:', error);
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
       const result = this._raceResults.find(r => 
        r.participantId === participantId && r.sport === sport
       );

       return result ? result.duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        const results = this._raceResults.filter(r =>
          r.participantId === participantId
        );

        if(results.length === 0){
          return new Duration(0);
        }
        
        return results.reduce((total, result) => 
          total.plus(result.duration), new Duration(0)
      );
  }
}

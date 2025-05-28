
import { strict } from "assert";
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs";

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
    if (!(result instanceof RaceResult)) {
      throw new TypeError("Argument must be an instance of RaceResult");
    }
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  async saveToFile(filePath) {
    try {
        
        const data = JSON.stringify(this._raceResults, null, 2);
        await fs.promises.writeFile(filePath, data, 'utf8');
        console.log('Data saved successfully to', filePath);
        return true;
    } catch (error) {
        console.error('Error writing to file:', error);
        return false;
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
      const data = fs.readFileSync(filePath, "utf8");
      const parsedData = JSON.parse(data);
      this._raceResults = parsedData.map(
        (item) => {          // new RaceResult(item._participantId, item._sportType, new Duration(item._duration._totalSeconds).toString())
          const duration = new Duration(item._duration._totalSeconds);
          return new RaceResult(
            item._participantId,
            item._sportType,
            duration
          );
        }
      );
      return true;
    }catch (error) {
      console.error("Error reading file:", error);
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
      (result) => result.getParticipantId() === participantId && result.getSportType() === sport
    );
    return result ? result.getDuration() : null;
  }
    

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const results = this._raceResults.filter(
        result => result instanceof RaceResult &&
        result.getParticipantId() === participantId
    );

    if (results.length === 0) {
      return new Duration(0);
    }

    return results.reduce((total, result) => {
      const duration = result.getDuration();
      if (!(duration instanceof Duration)) {
          throw new TypeError('Invalid duration in race result');
      }
      return total.plus(duration);
  }, new Duration(0));
  }
}

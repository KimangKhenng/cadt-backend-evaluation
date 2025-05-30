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
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    try{
      const data = this._raceResults.map(result =>result.toJSON());
      fs.writeFileSync(filePath, JSON.stringify(data,null,2),"utf-8");
      console.log(`Result saved to file ${filePath}`);
    }catch(error){
      console.error("Error saving data to file",error);
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
      const data = JSON.parse(fs.readFileSync(filePath,'utf-8'));
      this._raceResults = data.map(item =>
        new RaceResult(item.participant_id, item.sportType, new Duration(item.raceTime))
      );
      
    }catch(error){
      console.error("Error cant load data from file",error)
      
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
        race => race.participant_id === participantId && race.sportType === sport
    );
    return result ? result.raceTime : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const participantResults = this._raceResults.filter(
        race => race.participant_id === participantId
    );

    if (participantResults.length === 0) {
        return null; // No results found for the participant
    }

    const totalSeconds = participantResults.reduce(
        (sum, race) => sum + race.raceTime._totalSeconds,
        0
    );

    return new Duration(totalSeconds); // Return a new Duration object
  }
}


import Duration from "../model/Duration.js";
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
    fs.writeFileSync(filePath, JSON.stringify(this.raceResults), err => {
      (err) ? console.log("Error: ", err) : console.log("Success");
    });
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try {
      this._raceResults = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
      console.log("Reading error: ", error);
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
      const time = this._raceResults.find((element) => element.participant_id === participantId && element.sport === sport);
      return (time) ? time.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        const par = this._raceResults.filter((element) => element.participant_id === participantId);
        if (par) {
          let totalTime = new Duration(0);
          par.forEach(element => {
            totalTime = totalTime.plus(element.time);
          });
          return totalTime;
        } else {
          return null;
        }
  }
}

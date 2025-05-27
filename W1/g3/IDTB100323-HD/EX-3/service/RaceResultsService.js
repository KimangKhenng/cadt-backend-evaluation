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
    // TODO
    this._raceResults.push(result);
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    const data = this._raceResults.map(result=>({
      participantId : result.getParticipantID() ,
      sportType : result.getSportType(),
      duration : result.getDuration(),
    }))
    fs.writeFileSync(filePath, JSON.stringify(data,null,2));
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    try{
      const raw = fs.readFileSync(filePath);
      const data = JSON.parse(raw);
      data.map(entry => this.addRaceResult(new RaceResult(
          entry.participantID,
          entry.sportType,
          new Duration(entry.duration._totalSeconds)
      ))
      )
  }catch(e){
      console.log("load error",e);
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
        r => r.getParticipantID() === participantId && r.getSportType() === sport
      );
      return result ? result.getDuration() : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
        const found = this._raceResults.filter(rs => rs.getParticipantID() === participantId);
        const total = found.reduce((acc,curr)=>acc.plus(curr.getDuration()),new Duration(0));
        return total ? total : null
  }

}

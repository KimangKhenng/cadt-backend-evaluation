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
    const data = this._raceResults.map((result) => ({
      participant_id: result._participantId,
      sport: result._sportType,
      time: { _totalSeconds: result._duration._totalSeconds },
    }));

    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
      console.error("Failed to save data:", error);
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
      const data = fs.readFileSync(filePath, "utf-8");
      const parsedData = JSON.parse(data);

      // Map the parsed data into RaceResult and Duration
      this._raceResults = parsedData.map((item) => {
        return new RaceResult(
          item.participant_id,
          item.sport,
          new Duration(item.time._totalSeconds) // Create Duration object from seconds
        );
      });

      return true;
    } catch (error) {
      console.error("Failed to load data:", error);
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
      (raceResult) =>
        raceResult._participantId === participantId &&
        raceResult._sportType === sport
    );

    return result ? result._duration : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    // TODO
    const filterResult = this._raceResults.filter(
      (raceResult) => raceResult._participantId === participantId
    );

    // sum duration
    const totalDuration = filterResult.reduce((accumulatedTime, raceResult) => {
      return accumulatedTime.plus(raceResult._duration);
    }, new Duration(0)); // start with duration of 0s
    // if not found, return with 0s
    return totalDuration;
  }
}
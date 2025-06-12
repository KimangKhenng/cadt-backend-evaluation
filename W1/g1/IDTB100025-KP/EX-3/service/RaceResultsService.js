
import { json } from "stream/consumers";
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs/promises";

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
    if (result instanceof RaceResult){
      this._raceResults.push(result);
    }
    else {
      console.error ("invalid RacceResult object");
    }
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  async saveToFile(filePath) {
    // TODO
    const dirPath = filePath.substring(0, filePath.lastIndexOf('/'));
  try {
    await fs.mkdir(dirPath, { recursive: true });  // Create the directory if it doesn't exist
    const data = JSON.stringify(this._raceResults, null, 2);
    await fs.writeFile(filePath, data, 'utf8');  // Write the data to the file
  } catch (err) {
    console.error("Error saving file:", err);
  }
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  async loadFromFile(filePath) {
    // TODO
    try {
      await fs.access(filePath);
      const data = await fs.readFile(filePath, 'utf-8');
      const parsedData = JSON.parse(data);
      
      this._raceResults = parsedData.map(item => {
        // Handle both possible JSON structures
        const totalSeconds = item.time?._totalSeconds ?? item.duration?._totalSeconds;
        if (totalSeconds === undefined) {
          throw new Error("Invalid time format in JSON data");
        }
        return new RaceResult(
          item.participantId,
          item.sportType,
          new Duration(totalSeconds)
        );
      });
      return true;
    } catch (err) {
      console.error("Error loading file:", err);
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
       const result = this._raceResults.find(race =>
        race.participantId === participantId && race.sportType === sport
      );
      
      // If a result is found, calculate minutes and seconds and return as string
      if (result) {
        const totalSeconds = result.time._totalSeconds;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}m ${seconds}s`;
      }
      
      // If no result is found, return null
      return null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
        // TODO
      const participantResults = this._raceResults.filter(race => race.participantId === participantId);
    if (participantResults.length === 0) return null;

    let totalDuration = new Duration(0, 0, 0);
    participantResults.forEach(race => {
      totalDuration = totalDuration.plus(race.duration);
    });
    return totalDuration;
  }
  displayResults() {
    console.log("Participant ID\tSport\tTime");
    this._raceResults.forEach(result => {
      console.log(`${result.participantId}\t${result.sportType}\t${result.duration.toString()}`);
    });
  }
}

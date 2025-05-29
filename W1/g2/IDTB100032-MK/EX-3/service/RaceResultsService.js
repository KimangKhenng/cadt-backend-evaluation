import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs";

/**
 * This class handles the race results management system.
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
   * @param {RaceResult} result - The race result.
   */
  addRaceResult(result) {
    if (result instanceof RaceResult) {
      this._raceResults.push(result);
    } else {
      throw new Error("Invalid RaceResult object.");
    }
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    try {
      const data = JSON.stringify(this._raceResults, null, 2);
      fs.writeFileSync(filePath, data, "utf8");
      console.log("Race results saved successfully.");
    } catch (error) {
      console.error("Error saving race results:", error);
    }
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    try {
      // Check if the file exists
      if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return false;
      }

      const data = fs.readFileSync(filePath, "utf8");
      const parsedData = JSON.parse(data);

      // Validate and map data to RaceResult instances
      this._raceResults = parsedData
        .filter((item) => {
          // Validate each item
          if (
            typeof item.participantId === "string" &&
            item.participantId.trim() !== "" &&
            typeof item.sport === "string" &&
            item.sport.trim() !== "" &&
            item.time &&
            typeof item.time._totalSeconds === "number"
          ) {
            return true;
          } else {
            console.error("Invalid race result data:", item);
            return false;
          }
        })
        .map(
          (item) =>
            new RaceResult(
              item.participantId,
              item.sport,
              new Duration(item.time._totalSeconds)
            )
        );

      console.log("Race results loaded successfully.");
      return true;
    } catch (error) {
      console.error("Error loading race results:", error);
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
    const result = this._raceResults.find(
      (r) => r.participantId === participantId && r.sport === sport
    );
    return result ? result.time : null;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const participantResults = this._raceResults.filter(
      (r) => r.participantId === participantId
    );
    if (participantResults.length === 0) {
      return null;
    }
    return participantResults.reduce(
      (total, result) => total.plus(result.time),
      new Duration(0)
    );
  }
}

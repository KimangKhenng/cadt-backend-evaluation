import { Duration } from "./Duration.js";
/**
 * This class handles a single race time for a given participant and sport type.
 */
export class RaceResult {
  /**
   * @type {string} The ID of the participant.
   */
  participantId;

  /**
   * @type {string} The type of sport.
   */
  sportType;

  /**
   * @type {Duration} The duration of the race.
   */
  duration;

  /**
   * Static array to store all race results.
   * @type {RaceResult[]}
   */
  static raceResults = [];

  /**
   * Constructs a new RaceResult instance.
   * @param {string} participantId - The ID of the participant.
   * @param {string} sportType - The type of sport.
   * @param {Duration} duration - The duration of the race.
   * @throws {Error} If any parameter is invalid.
   */
  constructor(participantId, sportType, duration) {
    if (typeof participantId !== "string" || participantId.trim() === "") {
      throw new Error("Participant ID must be a non-empty string.");
    }
    if (typeof sportType !== "string" || sportType.trim() === "") {
      throw new Error("Sport type must be a non-empty string.");
    }
    if (!(duration instanceof Duration)) {
      throw new Error("Duration must be an instance of the Duration class.");
    }

    this.participantId = participantId;
    this.sportType = sportType;
    this.duration = duration;

    // Add the new instance to the static raceResults array
    RaceResult.raceResults.push(this);
  }

  /**
   * Retrieves all race results.
   * @returns {RaceResult[]} The list of all race results.
   */
  static getAllRaceResults() {
    return RaceResult.raceResults;
  }
}
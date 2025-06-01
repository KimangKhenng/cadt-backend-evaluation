import { Duration } from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type.
 */
export class RaceResult {
  /**
   * Initializes a new RaceResult instance.
   * @param {string} participant - The participant's ID.
   * @param {string} sportType - The type of sport.
   * @param {Duration} time - The duration of the race.
   */
  constructor(participant, sportType, time) {
    if (typeof participant !== "string" || participant.trim() === "") {
      throw new Error("Participant must be a non-empty string.");
    }
    if (typeof sportType !== "string" || sportType.trim() === "") {
      throw new Error("Sport type must be a non-empty string.");
    }
    if (!(time instanceof Duration)) {
      throw new Error("Time must be an instance of Duration.");
    }

    this._participant = participant;
    this._sportType = sportType;
    this._time = time;
  }

  /**
   * Gets the participant's ID.
   * @returns {string} The participant's ID.
   */
  get participant() {
    return this._participant;
  }

  /**
   * Gets the sport type.
   * @returns {string} The sport type.
   */
  get sportType() {
    return this._sportType;
  }

  /**
   * Gets the race time.
   * @returns {Duration} The race time.
   */
  get time() {
    return this._time;
  }

  /**
   * Converts the RaceResult object to a string.
   * @returns {string} A string representation of the RaceResult.
   */
  toString() {
    return `Participant: ${this._participant}, Sport Type: ${this._sportType}, Time: ${this._time.toString()}`;
  }
}


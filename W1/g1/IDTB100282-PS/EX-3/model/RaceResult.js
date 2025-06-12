/** @format */

import { Duration } from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type.
 */
export class RaceResult {
  /**
   * @param {string} participant - The name of the participant.
   * @param {string} sportType - The type of sport (e.g., "running", "swimming").
   * @param {Duration} raceTime - The duration of the race.
   */
  constructor(participant, sportType, raceTime) {
    this.participant = participant;
    this.sportType = sportType;
    this.raceTime = raceTime;
  }

  /**
   * Gets the participant's name.
   * @returns {string} The participant's name.
   */
  getParticipant() {
    return this.participant;
  }

  /**
   * Gets the sport type.
   * @returns {string} The sport type.
   */
  getSportType() {
    return this.sportType;
  }

  /**
   * Gets the race time.
   * @returns {Duration} The race time.
   */
  getRaceTime() {
    return this.raceTime;
  }

  /**
   * Converts the race result into a human-readable string.
   * @returns {string} The formatted race result string.
   */
  toString() {
    return `${this.participant} (${
      this.sportType
    }): ${this.raceTime.toString()}`;
  }
}

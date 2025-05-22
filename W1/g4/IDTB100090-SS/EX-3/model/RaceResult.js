import { Duration } from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type
 */
export class RaceResult {
  /**
   * @param {string} participantId
   * @param {string} sportType 
   * @param {Duration} duration 
   */
  constructor(participantId, sportType, duration) {
    /** @type {string} */
    this.participantId = participantId;

    /** @type {string} */
    this.sportType = sportType;

    /** @type {Duration} */
    this.duration = duration;
  }
}

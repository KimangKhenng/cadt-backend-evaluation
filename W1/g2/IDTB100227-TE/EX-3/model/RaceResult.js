import { Duration } from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type
 */
export class RaceResult {
  /**
   * @param {string} participantId - The ID of the participant.
   * @param {string} sport - The type of sport (e.g., run, swim).
   * @param {Duration} duration - The race duration.
   */
  constructor(participantId, sport, duration) {
    this.participantId = participantId;
    this.sport = sport;
    this.duration = duration;
  }
}

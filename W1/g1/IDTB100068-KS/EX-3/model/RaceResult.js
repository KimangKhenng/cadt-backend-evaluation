import { Duration } from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type.
 */
export class RaceResult {
  /**
   * @param {string} participantId - The ID of the participant.
   * @param {string} sport - The type of sport.
   * @param {Duration} time - The duration of the race.
   */
  constructor(participantId, sport, time) {
    this.participantId = participantId;
    this.sport = sport;
    this.time = time; // Should be a Duration object
  }
}

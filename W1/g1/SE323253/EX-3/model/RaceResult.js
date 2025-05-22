import { Duration } from "./Duration.js";

/**
 * Represents a race result for a participant in a specific sport.
 */
export class RaceResult {
  /**
   * Participant ID.
   * @type {string}
   */
  participantId;

  /**
   * Sport type (e.g., "swim", "run", etc.).
   * @type {string}
   */
  sport;

  /**
   * Duration of the race.
   * @type {Duration}
   */
  duration;

  /**
   * Creates a new RaceResult instance.
   * @param {string} participantId - ID of the participant.
   * @param {string} sport - Sport type.
   * @param {Duration} duration - Race duration.
   */
  constructor(participantId, sport, duration) {
    this.participantId = participantId;
    this.sport = sport;
    this.duration = duration;
  }
}

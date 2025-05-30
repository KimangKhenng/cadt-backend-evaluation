import Duration  from "./Duration.js";

/**
 * Represents the result of a race for a specific participant and sport type.
 */
export class RaceResult {
  /**
   * Creates a new RaceResult.
   * @param {string} participantId - The ID of the participant.
   * @param {string} sportType - The type of sport (e.g., running, cycling).
   * @param {Duration} duration - The duration of the race.
   */
  constructor(participantId, sportType, duration) {
    /**
     * The ID of the participant.
     * @type {string}
     */
    this.participantId = participantId;

    /**
     * The type of sport.
     * @type {string}
     */
    this.sportType = sportType;

    /**
     * The duration of the race.
     * @type {Duration}
     */
    this.duration = duration;
  }
}

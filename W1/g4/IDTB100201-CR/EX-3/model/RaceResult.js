import { Duration } from "./Duration.js";

/**
 * Represents a race score entry for a participant in a specific sport.
 */
export class RaceResult {
  /**
   * The participant's ID.
   * @type {string}
   */
  participantId;

  /**
   * The type of sport the participant competed in.
   * @type {string}
   */
  sport;

  /**
   * The duration of the race.
   * @type {Duration}
   */
  duration;

  /**
   * Constructs a RaceResult instance.
   * @param {string} participantId - The ID of the participant.
   * @param {string} sport - The sport type.
   * @param {Duration} duration - The race duration.
   */
  constructor(participantId, sport, duration) {
    this.participantId = participantId;
    this.sport = sport;
    this.duration = duration;
  }

  /**
   * Returns a string representation of the race result.
   * @returns {string}
   */
  toString() {
    return `${this.participantId} completed ${
      this.sport
    } in ${this.duration.toString()}`;
  }

  /**
   * Converts the RaceResult instance to a plain object for JSON serialization.
   * @returns {Object}
   */
  toJSON() {
    return {
      participantId: this.participantId,
      sport: this.sport,
      duration: this.duration.toString(),
    };
  }

}

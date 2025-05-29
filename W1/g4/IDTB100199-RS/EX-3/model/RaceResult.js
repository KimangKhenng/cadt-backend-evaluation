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
   * Converts the RaceResult instance to a JSON-friendly format.
   * @returns {Object} A JSON representation of the RaceResult.
   */
  toJSON() {
    return {
      participantId: this.participantId,
      sport: this.sport,
      duration: this.duration.toJSON(), // Use Duration's toJSON for clean serialization
    };
  }

  /**
   * Converts the RaceResult instance to a human-readable string.
   * @returns {string} A string representation of the RaceResult.
   */
  toString() {
    return `Participant: ${this.participantId}, Sport: ${this.sport}, Duration: ${this.duration.toString()}`;
  }

  /**
   * Creates a RaceResult instance from a plain object.
   * @param {Object} json - The plain object parsed from JSON.
   * @returns {RaceResult} A new RaceResult instance.
   */
  static fromJSON(json) {
    return new RaceResult(
     json.participantId || json.participant_id,
     json.sport,
     new Duration(json.duration.totalSeconds) // Create a Duration instance from `_totalSeconds`
    );
  }
}

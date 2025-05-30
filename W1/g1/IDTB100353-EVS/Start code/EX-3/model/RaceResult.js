import { Duration } from "./Duration.js";

/**
 * Represents a race result.
 */
export class RaceResult {
  /**
   * @param {string} participantId - The participant's ID.
   * @param {string} sport - The sport type.
   * @param {Duration} duration - The race duration.
   */
  constructor(participantId, sport, duration) {
    this.participantId = participantId;
    this.sport = sport;
    this.duration = duration;
  }

  toJSON() {
    return {
      participantId: this.participantId,
      sport: this.sport,
      duration: this.duration._totalSeconds,
    };
  }

  static fromJSON(obj) {
    return new RaceResult(
      obj.participantId,
      obj.sport,
      Duration.fromJSON(obj.duration)
    );
  }
}

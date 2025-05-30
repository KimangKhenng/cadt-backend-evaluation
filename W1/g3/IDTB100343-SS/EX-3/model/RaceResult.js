import { Duration } from "./Duration.js";

/**
 * This class handle a single race time for a given participant and sport type
 */
export class RaceResult {
  /**
   * 
   * @param {string} participantId 
   * @param {string} sport 
   * @param {Duration} time 
   */
  constructor(participantId, sport, time) {
    this.participantId = participantId;
    this.sport = sport;
    this.time = time;
  }

  /**
   * Converts RaceResult instance to a plain object for JSON
   */
  toJSON() {
    return {
      participantId: this.participantId,
      sport: this.sport,
      time: this.time._totalSeconds
    };
  }

  /**
   * Creates RaceResult from plain object
   * @param {object} obj 
   * @returns {RaceResult}
   */
  static fromJSON(obj) {
    return new RaceResult(
      obj.participantId,
      obj.sport,
      new Duration(obj.time)
    );
  }
}

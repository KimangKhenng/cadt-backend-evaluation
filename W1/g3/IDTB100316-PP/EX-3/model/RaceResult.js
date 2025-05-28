import { Duration } from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type
 */
export class RaceResult {
  /**
   * Participant Identity.
   * @type {string}
   * @private
   */
  participant_id

  /**
   * Contains sport type.
   * @type {string}
   * @private
   */
  sport

  /**
   * Contain time for the sport.
   * @type {Duration}
   * @private
   */
  time

  /**
   * Creates a new race result.
   * @param {string} participantId - The ID of the participant.
   * @param {string} sport - The type of sport.
   * @param {Duration} time - The duration of the race.
   */
  constructor(participantId, sport, time) {
    this.participant_id = participantId;
    this.sport = sport;
    this.time = time;
  }

  /**
   * Converts a raw object into a RaceResult instance.
   * @param {Object} rawObject - The raw object from JSON.
   * @returns {RaceResult} A new RaceResult instance.
   */
  static fromObjectToResult(rawObject) {
    return new RaceResult(
      rawObject.participant_id,
      rawObject.sport,
      new Duration(rawObject.time._totalSeconds)
    );
  }
}
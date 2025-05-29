import { Duration } from "./Duration.js";
/**
 * This class handles a single race time for a given participant and sport type
 */
export class RaceResult {
  /**
   * @type {string}
   * @private
   */
  _participantId;

  /**
   * @type {string}
   * @private
   */
  _sport;

  /**
   * @type {Duration}
   * @private
   */
  _time;

  /**
   * Creates a new RaceResult.
   * @param {string} participantId - The ID of the participant.
   * @param {string} sport - The sport name.
   * @param {Duration} time - The duration of the race.
   */
  constructor(participantId, sport, time) {
    this._participantId = participantId;
    this._sport = sport;
    this._time = time;
  }

  /**
   * Gets the participant ID.
   * @returns {string}
   */
  get participantId() {
    return this._participantId;
  }

  /**
   * Gets the sport.
   * @returns {string}
   */
  get sport() {
    return this._sport;
  }

  /**
   * Gets the time.
   * @returns {Duration}
   */
  get time() {
    return this._time;
  }

  /**
   * Converts the RaceResult to a JSON object for serialization.
   * @returns {Object}
   */
  toJSON() {
    return {
      participant_id: this._participantId,
      sport: this._sport,
      time: {
        _totalSeconds: this._time._totalSeconds
      }
    };
  }

  /**
   * Creates a RaceResult from a JSON object.
   * @param {Object} json - The JSON object.
   * @returns {RaceResult}
   */
  static fromJSON(json) {
    return new RaceResult(
      json.participant_id,
      json.sport,
      new Duration(json.time._totalSeconds)
    );
  }
}
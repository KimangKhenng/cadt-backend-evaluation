import { Duration } from './Duration.js';

/**
 * Represents a race result with participant ID, sport type, and duration.
 */
export class RaceResult {
  /**
   * The participant's ID.
   * @type {string}
   * @private
   */
  _participantId;

  /**
   * The sport type (e.g., swim, run).
   * @type {string}
   * @private
   */
  _sport;

  /**
   * The duration of the race.
   * @type {Duration}
   * @private
   */
  _duration;

  /**
   * Creates a new RaceResult.
   * @param {string} participantId - The participant's ID.
   * @param {string} sport - The sport type.
   * @param {Duration} duration - The duration of the race.
   */
  constructor(participantId, sport, duration) {
    this._participantId = participantId;
    this._sport = sport;
    this._duration = duration;
  }

  /**
   * Gets the participant ID.
   * @returns {string}
   */
  get participantId() {
    return this._participantId;
  }

  /**
   * Gets the sport type.
   * @returns {string}
   */
  get sport() {
    return this._sport;
  }

  /**
   * Gets the duration.
   * @returns {Duration}
   */
  get duration() {
    return this._duration;
  }
}
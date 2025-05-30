import { Duration } from './Duration.js';

/**
 * Represents a single race result.
 */
class RaceResult {
  /**
   * The participant’s ID.
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
   * @param {string} participantId - The participant’s ID.
   * @param {string} sport - The sport type.
   * @param {Duration} duration - The race duration.
   */
  constructor(participantId, sport, duration) {
    if (typeof participantId !== 'string' || participantId.trim() === '') {
      throw new Error('Participant ID must be a non-empty string');
    }
    if (typeof sport !== 'string' || sport.trim() === '') {
      throw new Error('Sport must be a non-empty string');
    }
    if (!(duration instanceof Duration)) {
      throw new Error('Duration must be a Duration instance');
    }
    this._participantId = participantId;
    this._sport = sport;
    this._duration = duration;
  }

  /**
   * Gets the participant ID.
   * @returns {string} The participant ID.
   */
  get participantId() {
    return this._participantId;
  }

  /**
   * Gets the sport type.
   * @returns {string} The sport type.
   */
  get sport() {
    return this._sport;
  }

  /**
   * Gets the duration.
   * @returns {Duration} The race duration.
   */
  get duration() {
    return this._duration;
  }
}

export { RaceResult };
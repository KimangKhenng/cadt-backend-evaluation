import { Duration } from './Duration.js';

/**
 * This class handles a single race time for a given participant and sport type.
 */
export class RaceResult {
  /**
   * The ID of the participant.
   * @type {string}
   * @private
   */
  _participantId;

  /**
   * The type of sport (e.g., "swim", "run").
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
   * Creates a new RaceResult instance.
   * @param {string} participantId - The ID of the participant.
   * @param {string} sport - The type of sport.
   * @param {Duration} duration - The duration of the race.
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
  getParticipantId() {
    return this._participantId;
  }

  /**
   * Gets the sport type.
   * @returns {string} The sport type.
   */
  getSport() {
    return this._sport;
  }

  /**
   * Gets the duration.
   * @returns {Duration} The duration.
   */
  getDuration() {
    return this._duration;
  }
}
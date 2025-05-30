import { Duration } from "./Duration.js";

/**
 * Represents a single race result for a given participant and sport.
 * Stores participant ID, sport type, and duration.
 */
export class RaceResult {
  /**
   * @type {string} The unique participant identifier.
   * @private
   */
  _participant_id;

  /**
   * @type {string} The sport type for the race.
   * @private
   */
  _sport;

  /**
   * @type {Duration} The time it took to finish the race.
   * @private
   */
  _duration;

  /**
   * Creates a new RaceResult instance.
   * @param {string} participantId - The participant's ID.
   * @param {string} sport - The sport type.
   * @param {Duration} duration - The duration of the race.
   */
  constructor(participantId, sport, duration) {
    this._participant_id = participantId;
    this._sport = sport;
    this._duration = duration;

    // Automatically add this instance to the static results list
    RaceResult._results.push(this);
  }

  /**
   * Static array storing all race results.
   * @type {RaceResult[]}
   */
  static _results = [];

  /**
   * Returns all race results.
   * @returns {RaceResult[]}
   */
  static getAllResults() {
    return RaceResult._results;
  }

  // Optionally, you can add getters if needed
  getParticipantId() {
    return this._participant_id;
  }

  getSport() {
    return this._sport;
  }

  getDuration() {
    return this._duration;
  }

  toString() {
    return `${this._participant_id} - ${this._sport}: ${this._duration.toString()}`;
  }
}

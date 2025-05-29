/**
 * Represents a duration of time, stored internally as total seconds.
 * Immutable: all operations return a new instance.
 */
export class Duration {
    /**
     * @type {number}
     * @private
     */
    _totalSeconds;
  
    /**
     * Creates a new Duration object.
     * @param {number} [seconds=0]
     */
    constructor(seconds = 0) {
      this._totalSeconds = seconds;
    }
  
    /**
     * Returns total seconds.
     * @returns {number}
     */
    get totalSeconds() {
      return this._totalSeconds;
    }
  
    /**
     * Creates a Duration from minutes and seconds.
     * @param {number} [minutes=0]
     * @param {number} [seconds=0]
     * @returns {Duration}
     */
    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
      return new Duration(minutes * 60 + seconds);
    }
  
    /**
     * Adds another Duration.
     * @param {Duration} other
     * @returns {Duration}
     */
    plus(other) {
      return new Duration(this._totalSeconds + other._totalSeconds);
    }
  
    /**
     * Subtracts another Duration (non-negative).
     * @param {Duration} other
     * @returns {Duration}
     */
    minus(other) {
      return new Duration(Math.max(this._totalSeconds - other._totalSeconds, 0));
    }
  
    /**
     * Formats as string, e.g. "2m 30s".
     * @returns {string}
     */
    toString() {
      const minutes = Math.floor(this._totalSeconds / 60);
      const seconds = this._totalSeconds % 60;
      return `${minutes}m ${seconds}s`;
    }
  }
  
/**
 * Represents a duration of time, stored internally as total seconds.
 * Immutable: all operations return a new instance.
 */

export class Duration {
    /**
     * Total duration in seconds.
     * @type {number}
     * @private
     */
    _totalSeconds;
  
    /**
     * Creates a new Duration object.
     * @param {number} [seconds=0] - The number of seconds.
     */
    constructor(seconds = 0) {
      if (isNaN(seconds) || !Number.isFinite(seconds)) {
        throw new Error("Duration must be created with a number of seconds.");
      }
      this._totalSeconds = Math.floor(seconds); // ensure integer seconds
    }
  
    /**
     * Creates a new Duration from a number of minutes and seconds.
     * @param {number} [minutes=0] - The number of minutes.
     * @param {number} [seconds=0] - The number of seconds.
     * @returns {Duration} A new Duration instance.
     */
    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
      const total = minutes * 60 + seconds;
      return new Duration(total);
    }
  
    /**
     * Returns a new Duration by adding another duration.
     * @param {Duration} other - Another duration to add.
     * @returns {Duration} A new Duration representing the sum.
     */
    plus = (other) => {
      return new Duration(this._totalSeconds + other._totalSeconds);
    };
  
    /**
     * Returns a new Duration by subtracting another duration.
     * @param {Duration} other - Another duration to subtract.
     * @returns {Duration} A new Duration representing the difference.
     */
    minus = (other) => {
      return new Duration(this._totalSeconds - other._totalSeconds);
    };
  
    /**
     * Converts the duration into a human-readable string, e.g., "2m 30s".
     * @returns {string} The formatted duration string.
     */
    toString = () => {
      const minutes = Math.floor(this._totalSeconds / 60);
      const seconds = Math.abs(this._totalSeconds % 60);
      const sign = this._totalSeconds < 0 ? "-" : "";
  
      if (minutes === 0) {
        return `${sign}${seconds}s`;
      }
      return `${sign}${minutes}m ${seconds}s`;
    };
  }
  
/**
 * Class representing a duration of time in seconds.
 */
export class Duration {
    /**
     * The total duration in seconds.
     * @type {number}
     * @private
     */
    _totalSeconds = 0;
  
    /**
     * Creates a Duration instance.
     * @param {number} totalSeconds - The total seconds for this duration.
     */
    constructor(totalSeconds) {
      this._totalSeconds = totalSeconds;
    }
  
    /**
     * Get the total seconds.
     * @returns {number} The total seconds.
     */
    get totalSeconds() {
      return this._totalSeconds;
    }
  
    /**
     * Create a Duration from minutes and seconds.
     * @param {number} minutes - Number of minutes.
     * @param {number} seconds - Number of seconds.
     * @returns {Duration} A new Duration instance.
     */
    static fromMinutesAndSeconds(minutes, seconds) {
      return new Duration(minutes * 60 + seconds);
    }
  
    /**
     * Adds another duration to this one.
     * @param {Duration} otherDuration - The duration to add.
     * @returns {Duration} A new Duration instance with the combined time.
     */
    add(otherDuration) {
      return new Duration(this._totalSeconds + otherDuration.totalSeconds);
    }
  
    /**
     * Converts the duration to a string in the format "Xm Ys".
     * @returns {string} A string representation of the duration.
     */
    toString() {
      const minutes = Math.floor(this._totalSeconds / 60);
      const seconds = this._totalSeconds % 60;
      return `${minutes}m ${seconds}s`;
    }
  }
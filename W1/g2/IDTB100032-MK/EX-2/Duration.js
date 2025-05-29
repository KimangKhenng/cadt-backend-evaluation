/**
 * Represents a duration of time, stored internally as total seconds.
 * Immutable: all operations return a new instance.
 */

// Exporting the class to make it usable in other files
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
    this._totalSeconds = Math.max(0, seconds); // Ensure non-negative duration
  }

  /**
   * Creates a new Duration from a number of minutes and seconds.
   * @param {number} [minutes=0] - The number of minutes.
   * @param {number} [seconds=0] - The number of seconds.
   * @returns {Duration} A new Duration instance.
   */
  static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
    const totalSeconds = Math.max(0, minutes * 60 + seconds);
    return new Duration(totalSeconds);
  }

  /**
   * Returns a new Duration by adding another duration.
   * @param {Duration} other - Another duration to add.
   * @returns {Duration} A new Duration representing the sum.
   */
  plus(other) {
    return new Duration(this._totalSeconds + other._totalSeconds);
  }

  /**
   * Returns a new Duration by subtracting another duration.
   * @param {Duration} other - Another duration to subtract.
   * @returns {Duration} A new Duration representing the difference.
   */
  minus(other) {
    return new Duration(Math.max(0, this._totalSeconds - other._totalSeconds));
  }

  /**
   * Converts the duration into a human-readable string, e.g., "2m 30s".
   * @returns {string} The formatted duration string.
   */
  toString() {
    const minutes = Math.floor(this._totalSeconds / 60);
    const seconds = this._totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  }
}

// Example usage:
// const duration1 = new Duration(90); // 1m 30s
// const duration2 = Duration.fromMinutesAndSeconds(2, 15); // 2m 15s
// const sum = duration1.plus(duration2); // 3m 45s
// const difference = duration2.minus(duration1); // 0m 45s
// console.log(sum.toString()); // "3m 45s"
// console.log(difference.toString()); // "0m 45s"

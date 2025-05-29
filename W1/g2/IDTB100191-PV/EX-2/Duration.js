/**
 * Represents a duration of time, stored internally as total seconds.
 * Immutable: all operations return a new instance.
 */

//  TODO - You need to export your class to use it

class Duration {
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
     // YOUR CODE
     if (typeof seconds !== 'number' || seconds < 0) {
      throw new Error('Duration must be a non-negative number of seconds.');
    }
    this._totalSeconds = Math.floor(seconds);
  }

  /**
   * Creates a new Duration from a number of minutes and seconds.
   * @param {number} [minutes=0] - The number of minutes.
   * @param {number} [seconds=0] - The number of seconds.
   * @returns {Duration} A new Duration instance.
   */
  static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
     // YOUR CODE
     if (typeof minutes !== 'number' || typeof seconds !== 'number' || minutes < 0 || seconds < 0) {
      throw new Error('Minutes and seconds must be non-negative numbers.');
    }
    const totalSeconds = (minutes * 60) + seconds;
    return new Duration(totalSeconds);
  }

  /**
   * Returns a new Duration by adding another duration.
   * @param {Duration} other - Another duration to add.
   * @returns {Duration} A new Duration representing the sum.
   */
  plus = (other) => {
         // YOUR CODE
         if (!(other instanceof Duration)) {
            throw new Error('Argument must be a Duration.');
          }
          return new Duration(this._totalSeconds + other._totalSeconds);
  };

  // YOUR COMMENT
  /**
   * Returns a new Duration by subtracting another duration.
   * @param {Duration} other - Another duration to subtract.
   * @returns {Duration} A new Duration representing the difference.
   */
  minus = (other) => {
      // YOUR CODE
      if (!(other instanceof Duration)) {
         throw new Error('Argument must be a Duration.');
         }
         const newSeconds = this._totalSeconds - other._totalSeconds;
         if (newSeconds < 0) {
         throw new Error('Resulting duration cannot be negative.');
         }
         return new Duration(newSeconds);
      };
      
      /**
      * Converts the duration into a human-readable string, e.g., "2m 30s".
      * @returns {string} The formatted duration string.
      */
      toString = () => {
         const minutes = Math.floor(this._totalSeconds / 60);
         const seconds = this._totalSeconds % 60;
         return `${minutes}m ${seconds}s`;
  };
}

export default Duration;
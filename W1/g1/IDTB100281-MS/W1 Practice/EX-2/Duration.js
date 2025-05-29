/**
 * Represents a duration of time, stored internally as total seconds.
 * Immutable: all operations return a new instance.
 */

//  TODO - You need to export your class to use it
export default class Duration {
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
     this._totalSeconds= seconds;
  }

  /**
   * Creates a new Duration from a number of minutes and seconds.
   * @param {number} [minutes=0] - The number of minutes.
   * @param {number} [seconds=0] - The number of seconds.
   * @returns {Duration} A new Duration instance.
   */
  static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
     const totalSeconds = minutes * 60 + seconds;
     // Return a new Duration with the calculated total seconds
     return new Duration(totalSeconds);
  }

  /**
   * Returns a new Duration by adding another duration.
   * @param {Duration} other - Another duration to add.
   * @returns {Duration} A new Duration representing the sum.
   */
  plus = (other) => {
      if (!(other instanceof Duration)){
         throw new Error('Argument must be an instance of Duration');
      }
      // Calculate the sum of total seconds
      return new Duration(this._totalSeconds + other._totalSeconds);
  }

/**
   * Returns a new Duration by subtracting another duration.
   * @param {Duration} other - Another duration to subtract.
   * @returns {Duration} A new Duration representing the difference.
   */
  minus = (other) => {
      if (!(other instanceof Duration)){
         throw new Error('Argument must be an instance of Duration');
      }
      // Calculate the difference of total seconds
      return new Duration(this._totalSeconds - other._totalSeconds);
  };

  /**
   * Converts the duration into a human-readable string, e.g., "2m 30s".
   * @returns {string} The formatted duration string.
   */
  toString = () => {
   const minutes = (this._totalSeconds/ 60) | 0;
   const seconds = this._totalSeconds % 60;
   return `${minutes}m ${seconds}s`;
  }
}

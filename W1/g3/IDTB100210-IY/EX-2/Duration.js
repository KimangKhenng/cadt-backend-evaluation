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
     this._totalSeconds= seconds;
  }

  /**
   * Creates a new Duration from a number of minutes and seconds.
   * @param {number} [minutes=0] - The number of minutes.
   * @param {number} [seconds=0] - The number of seconds.
   * @returns {Duration} A new Duration instance.
   */
  static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
     const totalSecondsFromMinutes = minutes * 60;
     const total = totalSecondsFromMinutes + seconds;
     return new Duration(total);    
  }

  /**
   * Returns a new Duration by adding another duration.
   * @param {Duration} other - Another duration to add.
   * @returns {Duration} A new Duration representing the sum.
   */
  plus = (other) => {
         // YOUR CODE
         if (!(other instanceof Duration)) {
            console.warn("Attempting to add a non-Duration object. This might lead to unexpected results.");
            return new Duration(this._totalSeconds); 
        }
        const newTotalSeconds = this._totalSeconds + other._totalSeconds;
        return new Duration(newTotalSeconds);
  };

  // YOUR COMMENT
  minus = (other) => {
         // YOUR CODE
         if (!(other instanceof Duration)) {
            console.warn("Attempting to subtract a non-Duration object. This might lead to unexpected results.");
            return new Duration(this._totalSeconds); // Or throw new TypeError("Can only subtract Duration objects");
        }
        const newTotalSeconds = this._totalSeconds - other._totalSeconds;
        return new Duration(newTotalSeconds);
  };

  /**
   * Converts the duration into a human-readable string, e.g., "2m 30s".
   * @returns {string} The formatted duration string.
   */
  toString = () => {
        // YOUR CODE
        const minutes = Math.floor(this._totalSeconds / 60);
        const seconds = this._totalSeconds % 60;
        return `${minutes}m ${seconds}s`;        

  };
}
export default Duration; // Export the class for use in other modules
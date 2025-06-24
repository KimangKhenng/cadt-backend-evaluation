

//  TODO - Copy from exercice 1
/**
 * Represents a duration of time, stored internally as total seconds.
 * Immutable: all operations return a new instance.
 */

//  TODO - You need to export your class to use it

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
       // YOUR CODE
       if (seconds < 0) {
        throw new Error("Duration cannot be negative");
      }
      this._totalSeconds = Math.floor(seconds); // make sure it's an integer
    
    }
  
    /**
     * Creates a new Duration from a number of minutes and seconds.
     * @param {number} [minutes=0] - The number of minutes.
     * @param {number} [seconds=0] - The number of seconds.
     * @returns {Duration} A new Duration instance.
     */
    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
       // YOUR CODE
       const total = minutes * 60 + seconds;
       return new Duration(total);
    }
  
    /**
     * Returns a new Duration by adding another duration.
     * @param {Duration} other - Another duration to add.
     * @returns {Duration} A new Duration representing the sum.
     */
    plus = (other) => {
           // YOUR CODE
           return new Duration(this._totalSeconds + other._totalSeconds);
    };
  
    // YOUR COMMENT
     /**
     * Returns a new Duration by subtracting another duration.
     * Throws an error if the result would be negative.
     * @param {Duration} other - Another duration to subtract.
     * @returns {Duration} A new Duration representing the difference.
     */
    minus = (other) => {
           // YOUR CODE
     const result = this._totalSeconds - other._totalSeconds;
     if (result < 0) {
        throw new Error("Resulting duration cannot be negative");
     }
      return new Duration(result);
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
  
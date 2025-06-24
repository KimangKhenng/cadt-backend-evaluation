

//  TODO - Copy from exercice 1

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
        this._totalSeconds = seconds;
    }
  
    /**
     * Creates a new Duration from a number of minutes and seconds.
     * @param {number} [minutes=0] - The number of minutes.
     * @param {number} [seconds=0] - The number of seconds.
     * @returns {Duration} A new Duration instance.
     */
    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
     const AllSeconds = (minutes * 60) + seconds;
     return new Duration(AllSeconds);
    }
  
    /**
     * Returns a new Duration by adding another duration.
     * @param {Duration} other - Another duration to add.
     * @returns {Duration} A new Duration representing the sum.
     */
    plus = (other) => {
        // YOUR CODE
        const sum = this._totalSeconds + other._totalSeconds;
        return new Duration(sum);
    };
  
    // YOUR COMMENT
    minus = (other) => {
           const anothersum = this._totalSeconds - other._totalSeconds;
           return new Duration(anothersum);
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
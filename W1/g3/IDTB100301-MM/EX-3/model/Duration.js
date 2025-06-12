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
      if (typeof seconds !== 'number' || seconds < 0) {
        throw new Error('Seconds must be a non-negative number');
      }
      this._totalSeconds = seconds;
    }
  
    /**
     * Creates a new Duration from a number of minutes and seconds.
     * @param {number} [minutes=0] - The number of minutes.
     * @param {number} [seconds=0] - The number of seconds.
     * @returns {Duration} A new Duration instance.
     */
    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
      if (typeof minutes !== 'number' || typeof seconds !== 'number' || minutes < 0 || seconds < 0) {
        throw new Error('Minutes and seconds must be non-negative numbers');
      }
      return new Duration(minutes * 60 + seconds);
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
  /**
    * Returns a new Duration by adding another duration.
    * @param {Duration} other - Another duration to add.
    * @returns {Duration} A new Duration representing the sum.
    */
  plus(other) {
    if (!(other instanceof Duration)) {
      throw new Error('Argument must be a Duration instance');
    }
    return new Duration(this._totalSeconds + other._totalSeconds);
  }
 
  /**
   * Returns a new Duration by subtracting another duration.
   * @param {Duration} other - Another duration to subtract.
   * @returns {Duration} A new Duration representing the difference.
   */
  minus(other) {
    if (!(other instanceof Duration)) {
      throw new Error('Argument must be a Duration instance');
    }
    const result = this._totalSeconds - other._totalSeconds;
    if (result < 0) {
      throw new Error('Resulting duration cannot be negative');
    }
    return new Duration(result);
  }
 }
  export { Duration };
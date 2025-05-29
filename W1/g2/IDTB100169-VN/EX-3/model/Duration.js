export class Duration {
    /**
     * Total duration in seconds.
     * @type {number}
     * @private
     */
    _totalSeconds;
  
    constructor(seconds = 0) {
      this._totalSeconds = seconds;
    }
  
    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
      return new Duration(minutes * 60 + seconds);
    }
  
    plus(other) {
      return new Duration(this._totalSeconds + other._totalSeconds);
    }
  
    minus(other) {
      return new Duration(Math.max(0, this._totalSeconds - other._totalSeconds));
    }
  
    toString() {
      const minutes = Math.floor(this._totalSeconds / 60);
      const seconds = this._totalSeconds % 60;
      return `${minutes}m ${seconds}s`;
    }
  
    toJSON() {
      return this._totalSeconds;
    }
  }
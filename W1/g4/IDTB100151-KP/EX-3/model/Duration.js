export default class Duration {
    _totalSeconds;
  
    constructor(seconds = 0) {
      this._totalSeconds = seconds;
    }
  
    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
      const totalSeconds = minutes * 60 + seconds;
      return new Duration(totalSeconds);
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
  }
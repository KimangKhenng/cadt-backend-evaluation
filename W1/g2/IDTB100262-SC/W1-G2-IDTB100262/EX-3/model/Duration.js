export class Duration {
    constructor(totalSeconds) {
      this._totalSeconds = totalSeconds;
    }
  
    static fromMinutesAndSeconds(minutes, seconds) {
      return new Duration(minutes * 60 + seconds);
    }
  
    static fromTotalSeconds(seconds) {
      return new Duration(seconds);
    }
  
    get totalSeconds() {
      return this._totalSeconds;
    }
  
    toString() {
      const minutes = Math.floor(this._totalSeconds / 60);
      const seconds = this._totalSeconds % 60;
      return `${minutes}m ${seconds}s`;
    }
  }
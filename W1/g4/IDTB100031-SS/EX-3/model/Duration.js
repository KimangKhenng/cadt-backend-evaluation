

//  TODO - Copy from exercice 1
export class Duration {

    constructor(seconds = 0) {
       // YOUR CODE
       this._totalSeconds = Number(seconds);
    }

    get seconds() {
      return this._totalSeconds;
    }

    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
       // YOUR CODE
       return new Duration(minutes * 60 + seconds);
    }

    plus = (other) => {
           // YOUR CODE
           return new Duration(this._totalSeconds + other._totalSeconds);
    };

    minus = (other) => {
           // YOUR CODE
           return new Duration(Math.max(0, this._totalSeconds - other._totalSeconds));
    };
  
    toString = () => {
          // YOUR CODE
      const minutes = Math.floor(this._totalSeconds / 60);
      const seconds = this._totalSeconds % 60;
      return `${minutes}m ${seconds}s`;
    };
  }
  
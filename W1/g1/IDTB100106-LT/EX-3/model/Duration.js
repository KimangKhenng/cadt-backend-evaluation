class Duration {
    _totalSeconds;

    constructor(seconds = 0) {
        this._totalSeconds = seconds;
    }

    static fromMinutesAndSeconds(minutes = 0, seconds = 0) {
        const totalSeconds = minutes * 60 + seconds;
        return new Duration(totalSeconds);
    }

    static fromMilliseconds(ms) {
        return new Duration(ms / 1000);
    }

    plus = (other) => {
        return new Duration(this._totalSeconds + other._totalSeconds);
    };

    minus = (other) => {
        return new Duration(this._totalSeconds - other._totalSeconds);
    };

    toMilliseconds() {
        return this._totalSeconds * 1000;
    }

    toString = () => {
        const minutes = Math.floor(this._totalSeconds / 60);
        const seconds = this._totalSeconds % 60;
        return `${minutes}m ${seconds}s`;
    };
}

export default Duration;
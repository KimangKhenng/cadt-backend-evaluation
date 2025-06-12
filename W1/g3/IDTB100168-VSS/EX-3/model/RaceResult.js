import { Duration } from "./Duration.js";

export class RaceResult {
    /**
     * @param {string} participantId 
     * @param {string} sport 
     * @param {Duration} duration 
     */
    constructor(participantId, sport, duration) {
        this.participantId = participantId;
        this.sport = sport;
        this.duration = duration;
    }

    /**
     * Serializes the RaceResult to a plain object
     * @returns {object}
     */
    toJSON() {
        return {
            participantId: this.participantId,
            sport: this.sport,
            duration: this.duration._totalSeconds
        };
    }

    /**
     * Creates a RaceResult from a plain object
     * @param {object} obj 
     * @returns {RaceResult}
     */
    static fromJSON(obj) {
        return new RaceResult(
            obj.participantId,
            obj.sport,
            new Duration(obj.duration)
        );
    }
}
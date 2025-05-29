import { Duration } from "./Duration.js";

/**
 * Represents a single race result for a participant.
 */
export class RaceResult {
    /**
     * Participant identifier.
     * @type {string}
     */
    participantId;

    /**
     * Sport type.
     * @type {string}
     */
    sport;

    /**
     * Race duration.
     * @type {Duration}
     */
    duration;

    /**
     * Creates a new RaceResult.
     * @param {string} participantId - Participant identifier.
     * @param {string} sport - Sport type.
     * @param {Duration} duration - Race duration.
     */
    constructor(participantId, sport, duration) {
        this.participantId = participantId;
        this.sport = sport;
        this.duration = duration;
    }

    /**
     * Converts to a plain object for JSON serialization.
     * @returns {object} Plain object representation.
     */
    toJSON() {
        return {
            participantId: this.participantId,
            sport: this.sport,
            duration: this.duration._totalSeconds
        };
    }

    /**
     * Creates from a plain object.
     * @param {object} obj - Plain object representation.
     * @returns {RaceResult} New RaceResult instance.
     */
    static fromJSON(obj) {
        return new RaceResult(
            obj.participantId,
            obj.sport,
            new Duration(obj.duration)
        );
    }
}
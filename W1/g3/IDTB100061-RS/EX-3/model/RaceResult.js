import { Duration } from './Duration.js';

/**
 * Represents a race result with participant ID, sport type, and duration.
 */
export class RaceResult {
    /**
     * The unique identifier of the participant
     * @type {string}
     */
    participantId;

    /**
     * The type of sport
     * @type {string}
     */
    sport;

    /**
     * The duration of the race
     * @type {Duration}
     */
    duration;

    /**
     * Creates a new RaceResult instance
     * @param {string} participantId - The unique identifier of the participant
     * @param {string} sport - The type of sport
     * @param {Duration} duration - The duration of the race
     */
    constructor(participantId, sport, duration) {
        this.participantId = participantId;
        this.sport = sport;
        this.duration = duration;
    }

    toJSON() {
        return {
            participantId: this.participantId,
            sport: this.sport,
            duration: this.duration
        };
    }
}

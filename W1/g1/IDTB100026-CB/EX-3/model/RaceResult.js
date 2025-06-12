// model/RaceResult.js

import { Duration } from "./Duration.js";

/**
 * Represents a race result.
 */
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
}

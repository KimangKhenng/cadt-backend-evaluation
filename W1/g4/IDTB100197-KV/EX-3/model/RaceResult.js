import { Duration } from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type
 */
export class RaceResult {
    /**
     * Participant ID
     * @type {string}
     * @private
     */
    _participantId;

    /**
     * Sport type
     * @type {string}
     * @private
     */
    _sportType;

    /**
     * Duration of the race result
     * @type {Duration}
     * @private
     */
    _duration;

    /**
     * Creates a new RaceResult object.
     * @param {string} participantId - The participant's unique identifier.
     * @param {string} sportType - The type of sport for this result.
     * @param {Duration} duration - The duration of the race result.
     */
    constructor(participantId, sportType, duration) {
        this._participantId = participantId;
        this._sportType = sportType;
        this._duration = duration;
    }

    /**
     * Gets the participant ID
     * @returns {string} The participant ID
     */
    get participantId() {
        return this._participantId;
    }

    /**
     * Gets the sport type
     * @returns {string} The sport type
     */
    get sportType() {
        return this._sportType;
    }

    /**
     * Gets the duration
     * @returns {Duration} The duration
     */
    get duration() {
        return this._duration;
    }
}
import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given participant and sport type
 */
export class RaceResult {
    /**
     * @type {string}
     * @private
     */
    _participantId;

    /**
     * @type {string}
     * @private
     */
    _sport;

    /**
     * @type {Duration}
     * @private
     */
    _time;

    /**
     * Creates a new RaceResult.
     * @param {string} participantId - The participant's ID
     * @param {string} sport - The sport type
     * @param {Duration} time - The duration of the race
     */
    constructor(participantId, sport, time) {
        this._participantId = participantId;
        this._sport = sport;
        this._time = time;
    }

    get participantId() { return this._participantId; }
    get sport() { return this._sport; }
    get time() { return this._time; }
}
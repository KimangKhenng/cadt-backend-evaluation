import {Duration} from "./Duration.js";

/**
 * This class handle a single race time for a given participant and sport type
 */
export class RaceResult {

    // TODO
    /**
     * Id of participant
     * @type {string}
     * @private
     */
    participantId;

    /**
     * Type of sport
     * @type {string}
     * @private
     */
    sportType;

    /**
     * Duration of participant's race
     * @type {Duration}
     * @private
     */
    time;

    /**
     * Create a new RaceResult object
     * @param {string} participantId - id of participant
     * @param {string} sportType - type of sport
     * @param {Duration} time - duration of race
     */
    constructor(participantId, sportType, time) {
        this.participantId = participantId;
        this.sportType = sportType;
        this.time = time;
    }
}
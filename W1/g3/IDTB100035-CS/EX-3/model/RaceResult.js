import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
    /**
     * @param {string} participant_id - The participant's ID.
     * @param {string} sport - The sport type.
     * @param {Duration} time - The race time as a Duration.
     */
    constructor(participant_id, sport, time){
        this.participant_id = participant_id;
        this.sport = sport;
        this.time = time;
    }
}
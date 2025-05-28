import { Duration } from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type.
 */
export class RaceResult {
    /**
     * @param {string} participantId - The ID of the participant.
     * @param {string} sportType - The type of sport.
     * @param {Duration} time - The duration of the race.
     */
    constructor(participantId, sportType, time) {
        this.participantId = participantId;
        this.sportType = sportType;
        this.time = time;
    }

    /** 
     * Serializes the RaceResult instance to a plain object for JSON storage.
     * @returns {Object} The serialized object.
     */
    toJSON() {
        return {
            participant_id: this.participantId,
            sport: this.sportType,
            time: { _totalSeconds: this.time._totalSeconds },
        };
    }

    /**
     * Creates a RaceResult instance from a plain object.
     * @param {Object} data - The plain object.
     * @return {RaceResult} The RaceResult instance.
     */
    static fromJSON(data) {
        return new RaceResult(
            data.participant_id, 
            data.sport,         
            new Duration(data.time._totalSeconds)
        );
    }
}
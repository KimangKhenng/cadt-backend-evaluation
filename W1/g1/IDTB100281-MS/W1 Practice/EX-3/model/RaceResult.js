import Duration from './Duration.js';

export default class RaceResult {
    /**
     * Creates a new RaceResult.
     * @param {string} participant_id - Participant ID.
     * @param {string} sport - Sport type.
     * @param {Duration} time - Race duration.
     */
    constructor(participant_id, sport, time) {
        if (!(time instanceof Duration)) {
            throw new Error('Time must be a Duration instance');
        }
        
        this.participant_id = participant_id;
        this.sport = sport;
        this.time = time;
    }
}
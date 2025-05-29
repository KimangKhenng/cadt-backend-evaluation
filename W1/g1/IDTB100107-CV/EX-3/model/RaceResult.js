/**
 * Represents a single race result for a participant in a specific sport.
 */
export class RaceResult {
    /**
     * The unique identifier of the participant.
     * @type {string}
     */
    participantId;

    /**
     * The sport in which the participant competed.
     * @type {string}
     */
    sport;

    /**
     * The duration taken by the participant to complete the race.
     * @type {Duration}
     */
    duration;

    /**
     * Creates a new RaceResult instance.
     * @param {string} participantId - The unique identifier of the participant.
     * @param {string} sport - The sport in which the participant competed.
     * @param {Duration} duration - The duration taken to complete the race.
     */
    constructor(participantId, sport, duration) {
        this.participantId = participantId;
        this.sport = sport;
        this.duration = duration;
    }
}

/**
 * Represents a collection of race results for multiple participants.
 */
export class RaceResults {
    /**
     * An array of RaceResult objects.
     * @type {RaceResult[]}
     */
    results;

    /**
     * Creates a new RaceResults instance.
     * @param {RaceResult[]} [initialResults=[]] - Optional initial array of race results.
     */
    constructor(initialResults = []) {
        this.results = initialResults;
    }

    /**
     * Adds a new race result to the collection.
     * @param {RaceResult} result - The race result to add.
     * @throws {Error} If the input is not a RaceResult object.
     */
    addResult(result) {
        if (result instanceof RaceResult) {
            this.results.push(result);
        } else {
            throw new Error("Invalid RaceResult object.");
        }
    }

    /**
     * Gets all race results for a specific participant.
     * @param {string} participantId - The participant ID to filter by.
     * @returns {RaceResult[]} An array of matching race results.
     */
    getResultsForParticipant(participantId) {
        return this.results.filter(r => r.participantId === participantId);
    }

    /**
     * Gets all race results for a specific sport.
     * @param {string} sport - The sport to filter by.
     * @returns {RaceResult[]} An array of matching race results.
     */
    getResultsForSport(sport) {
        return this.results.filter(r => r.sport === sport);
    }
}
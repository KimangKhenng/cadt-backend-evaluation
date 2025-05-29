import fs from 'fs'
import {Duration} from "../model/Duration.js";
import {RaceResult} from "../model/RaceResult.js";

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
    /**
     * The list of race results.
     * @type {Array<RaceResult>}
     * @private
     */
    _raceResults = [];

    get raceResults() {
        return this._raceResults;
    }

    /**
     * Adds a new race result to the race list.
     * @param {RaceResult} result - The prace result.
     */
    addRaceResult(result) {
        this._raceResults.push(result);
    }

    /**
     * Saves the race results list to a JSON file.
     * @param {string} filePath - The path to the file where data should be saved.
     */
    saveToFile(filePath) {
        fs.writeFileSync(filePath, JSON.stringify(this.raceResults), 'utf8');
    }

    /**
     * Loads the race results list from a JSON file.
     * @param {string} filePath - The path to the file to load data from.
     * @returns {boolean} True if loading was successful, false otherwise.
     */
    loadFromFile(filePath) {
        try {
            this._raceResults = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Retrieves the race time for a given participant and sport.
     * @param {string} participantId - Participant ID.
     * @param {string} sport - Sport name.
     * @returns {Duration|null} Duration if found, else null.
     */
    getTimeForParticipant(participantId, sport) {
        const participant = this._raceResults.find(raceResult => raceResult._participant_id === participantId && raceResult._sport === sport);
        return participant ?
            new Duration(participant._duration._totalSeconds).toString()
            : null;

    }

    /**
     * Computes the total time for a given participant by summing their race times.
     * @param {string} participantId - The ID of the participant.
     * @returns {Duration|null} The total Duration object if found, otherwise null.
     */
    getTotalTimeForParticipant(participantId) {
        const participant = this._raceResults.filter(raceResult => raceResult._participant_id === participantId);
        let fullDuration = 0;
        participant.forEach((part) => {
            fullDuration += part._duration._totalSeconds;
        })
        return fullDuration !== 0
            ? new Duration(fullDuration).toString()
            : null;
    }
}

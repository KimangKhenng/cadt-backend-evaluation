import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs";

/**
 * This class handles the race results management system.
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
     * @param {RaceResult} result - The race result.
     */
    addRaceResult(result) {
        this._raceResults.push(result);
    }

    /**
     * Saves the race results list to a JSON file.
     * @param {string} filePath - The path to the file where data should be saved.
     */
    saveToFile(filePath) {
        const data = this._raceResults.map((result) => result.toJSON());
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    }

    /**
     * Loads the race results list from a JSON file.
     * @param {string} filePath - The path to the file to load data from.
     * @returns {boolean} True if loading was successful, false otherwise.
     */
    loadFromFile(filePath) {
        try {
            if (!fs.existsSync(filePath)) {
                console.warn("File does not exist, initializing empty race results.");
                this._raceResults = [];
                return true;
            }
            const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
            this._raceResults = data.map((item) => RaceResult.fromJSON(item));
            return true;
        } catch (error) {
            console.error("Error loading file:", error);
            return false;
        }
    }

    /**
     * Retrieves the race time for a given participant and sport.
     * @param {string} participantId - Participant ID.
     * @param {string} sport - Sport name.
     * @returns {Duration|null} Duration if found, else null.
     */
    getTimeForParticipant(participantId, sport) {
        const result = this._raceResults.find(
            (result) => result.participantId === participantId && result.sportType === sport
        );
        return result ? result.time : null;
    }

    /**
     * Computes the total time for a given participant by summing their race times.
     * @param {string} participantId - The ID of the participant.
     * @returns {Duration} The total Duration object.
     */
    getTotalTimeForParticipant(participantId) {
        const results = this._raceResults.filter(
            (result) => result.participantId === participantId
        );
        return results.reduce((total, result) => total.plus(result.time), new Duration(0));
    }
}
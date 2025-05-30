import {Duration} from "../model/Duration.js";
import {RaceResult} from "../model/RaceResult.js";
import fs from "fs";

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
     * @param {RaceResult} result - The race result.
     */
    addRaceResult(result) {
        // TODO
        this._raceResults.push(result);
    }

    /**
     * Saves the race results list to a JSON file.
     * @param {string} filePath - The path to the file where data should be saved.
     */
    saveToFile(filePath) {
        // TODO
        fs.writeFileSync(filePath, JSON.stringify(this._raceResults, null, 2), 'utf8');
    }

    /**
     * Loads the race results list from a JSON file.
     * @param {string} filePath - The path to the file to load data from.
     * @returns {boolean} True if loading was successful, false otherwise.
     */
    loadFromFile(filePath) {
        // TODO
        let content = '';

        try {
            content = fs.readFileSync(filePath).toString();
            this._raceResults = JSON.parse(content);
        } catch (err) {
            console.error("file path does not exist: ", filePath);
            return false;
        }
        return true;

    }

    /**
     * Retrieves the race time for a given participant and sport.
     * @param {string} participantId - Participant ID.
     * @param {string} sport - Sport name.
     * @returns {Duration|null} Duration if found, else null.
     */
    getTimeForParticipant(participantId, sport) {
        // TODO
        const found = this._raceResults.find((element) => element.participantId === participantId && element.sportType === sport);
        if (found) {
            return found.time;
        }
        console.log("not found: ", participantId, " ", sport);
        return null;

    }

    /**
     * Computes the total time for a given participant by summing their race times.
     * @param {string} participantId - The ID of the participant.
     * @returns {Duration|null} The total Duration object if found, otherwise null.
     */
    getTotalTimeForParticipant(participantId) {
        // TODO
        const found = this._raceResults.filter((element) => element.participantId === participantId);
        if (found) {
            let totalTime = new Duration(0);

            found.forEach((element) => {
                totalTime = totalTime.plus(element.time);
            });
            return totalTime;
        }
        return null;
    }
}

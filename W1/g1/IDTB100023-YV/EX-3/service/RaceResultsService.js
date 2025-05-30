// service/RaceResultsService.js

import fs from 'fs';
import { RaceResult } from '../model/RaceResult.js';
import { Duration } from '../model/Duration.js';

/**
 * Service to manage race results.
 */
export class RaceResultsService {
    constructor() {
        this._raceResults = [];
    }

    /**
     * Adds a new race result.
     * @param {RaceResult} result
     */
    addRaceResult(result) {
        this._raceResults.push(result);
    }

    /**
     * Saves race results to a JSON file.
     * @param {string} filePath
     */
    saveToFile(filePath) {
        const data = JSON.stringify(this._raceResults.map(r => ({
            participantId: r.participantId,
            sport: r.sport,
            time: r.duration
        })));
        fs.writeFileSync(filePath, data, 'utf8');
    }

    /**
     * Loads race results from a JSON file.
     * @param {string} filePath
     * @returns {boolean}
     */
    loadFromFile(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const jsonData = JSON.parse(data);
            this._raceResults = jsonData.map(r => 
                new RaceResult(r.participantId, r.sport, new Duration(r.time._totalSeconds).toString() )
            );
            return true;
        } catch (error) {
            console.error("Failed to load race results:", error);
            return false;
        }
    }

    /**
     * Retrieves time for a given participant and sport.
     * @param {string} participantId
     * @param {string} sport
     * @returns {Duration|null}
     */
    getTimeForParticipant(participantId, sport) {
        const result = this._raceResults.find(r => r.participantId === participantId && r.sport === sport);
        return result ? result.duration : null;
    }

    /**
     * Computes total time for a participant.
     * @param {string} participantId
     * @returns {Duration}
     */
    getTotalTimeForParticipant(participantId) {
        const results = this._raceResults.filter(r => r.participantId === participantId);
        if (results.length === 0) return new Duration(0);

        return results
            .map(r => r.duration)
            .reduce((total, current) => total.plus(current), new Duration(0));
    }
}

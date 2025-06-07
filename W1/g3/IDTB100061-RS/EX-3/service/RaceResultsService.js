import fs from 'fs';
import { RaceResult } from '../model/RaceResult.js';
import { Duration } from '../model/Duration.js';

/**
 * Service class to manage race results
 */
export class RaceResultsService {
    /**
     * List of race results
     * @type {RaceResult[]}
     * @private
     */
    _raceResults;

    /**
     * Creates a new RaceResultsService
     */
    constructor() {
        this._raceResults = [];
    }

    /**
     * Adds a new race result to the race list.
     * @param {RaceResult} result - The race result to add.
     */
    addRaceResult(result) {
        if (!(result instanceof RaceResult)) {
            throw new Error('Invalid race result object');
        }
        this._raceResults.push(result);
    }

    /**
     * Saves the race results list to a JSON file.
     * @param {string} filePath - The path to the file data should be saved.
     */
    saveToFile(filePath) {
        const jsonData = JSON.stringify(this._raceResults, null, 2);
        fs.writeFileSync(filePath, jsonData, 'utf8');
    }

    /**
     * Gets the time for a specific participant in a given sport
     * @param {string} participantId - The ID of the participant
     * @param {string} sport - The sport type
     * @returns {Duration|null} The duration for the participant in the sport, or null if not found
     */
    getTimeForParticipant(participantId, sport) {
        const result = this._raceResults.find(
            r => r.participantId === participantId && r.sport === sport
        );
        return result ? result.duration : null;
    }

    /**
     * Gets the total time for a participant across all sports
     * @param {string} participantId - The ID of the participant
     * @returns {Duration} The total duration for the participant
     */
    getTotalTimeForParticipant(participantId) {
        const results = this._raceResults.filter(
            r => r.participantId === participantId
        );
        
        return results.reduce(
            (total, current) => total.plus(current.duration),
            new Duration(0)
        );
    }

    /**
     * Loads the race results list from a JSON file.
     * @param {string} filePath - The path to the file to load data from.
     * @returns {boolean} True if loading was successful, false otherwise.
     */
    loadFromFile(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const parsedData = JSON.parse(data);
            
            // Convert the plain objects back to RaceResult instances
            this._raceResults = parsedData.map(item => {
                const duration = new Duration(item.duration._seconds);
                return new RaceResult(item.participantId, item.sport, duration);
            });
            
            return true;
        } catch (error) {
            console.error('Error loading race results:', error.message);
            return false;
        }
    }
}

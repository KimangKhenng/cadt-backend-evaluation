import fs from 'fs';
import Duration from '../model/Duration.js';
import RaceResult from '../model/RaceResult.js';

export class RaceResultsService {
    /**
     * The list of race results.
     * @type {Array<RaceResult>}
     * @private
     */
    _raceResults = [];

    /**
     * Adds a new race result to the race list.
     * @param {RaceResult} result - The race result to add.
     * @throws {Error} If result is not a RaceResult instance
     */
    addRaceResult(result) {
        if (!(result instanceof RaceResult)) {
            throw new Error('Argument must be an instance of RaceResult');
        }
        this._raceResults.push(result);
    }

    /**
     * Saves the race results list to a JSON file.
     * @param {string} filePath - The path to save data to.
     */
    saveToFile(filePath) {
        const data = JSON.stringify(
            this._raceResults.map(result => ({
                participant_id: result.participant_id,
                sport: result.sport,
                time: { _totalSeconds: result.time._totalSeconds }
            })), // ← this closes map()
            null,
            2
        );
    
        fs.writeFileSync(filePath, data, 'utf8');
    }
    

    /**
     * Loads the race results list from a JSON file.
     * @param {string} filePath - The path to load data from.
     * @returns {boolean} True if successful, false otherwise.
     */
    loadFromFile(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const parsed = JSON.parse(data);
            
            this._raceResults = parsed.map(item => 
                new RaceResult(
                    item.participant_id,
                    item.sport,
                    new Duration(item.time._totalSeconds)
                ))
            return true;
        } catch (err) {
            console.error("Error loading file:", err.message);
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
        const result = this._raceResults.find(r => 
            r.participant_id === participantId && 
            r.sport === sport
        );
        return result ? result.time : null;
    }

    /**
     * Computes total time for a given participant by summing their race times.
     * @param {string} participant_id - Participant ID.
     * @returns {Duration} Total duration (0s if none found).
     */
    getTotalTimeForParticipant(participant_id) {
        const results = this._raceResults.filter(r => 
            r.participant_id === participant_id
        );
        
        if (results.length === 0) return new Duration(0);
        
        return results.reduce((total, current) => 
            total.plus(current.time), 
            new Duration(0)
        );
    }
}

import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from 'fs';

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
    // Validate input
    if (!(result instanceof RaceResult)) {
        throw new Error("Only RaceResult objects can be added");
    }
    
    // Add to internal array
    this._raceResults.push(result);
 }
  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    try {
      // Convert race results to JSON string
      const jsonData = JSON.stringify(
          this._raceResults.map(result => result.toJSON()),
          null,
          2  // Pretty-print with 2-space indentation
      );
      
      // Write to file synchronously
      fs.writeFileSync(filePath, jsonData, 'utf8');
      console.log(`Successfully saved results to ${filePath}`);
   }  catch (error) {
      console.error("Error saving race results:", error);
      throw error; // Re-throw for caller to handle
   }  
}

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    try {
        // 1. Read the file synchronously
        const data = fs.readFileSync(filePath, 'utf8');
        
        // 2. Parse JSON and convert to RaceResult objects
        const parsedData = JSON.parse(data);
        this._raceResults = parsedData.map(item => 
            RaceResult.fromJSON(item)
        );
        
        return true;
    } catch (error) {
        console.error("Error loading race results:", error);
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
    // Find the first matching result
    const result = this._raceResults.find(r => 
        r.participantId === participantId && 
        r.sport.toLowerCase() === sport.toLowerCase()
    );
    
    // Return duration if found, otherwise null
    return result ? result.duration : null;
 }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    // Filter results for the participant
    const participantResults = this._raceResults.filter(r => 
        r.participantId === participantId
    );
    
    // If no results, return 0 duration
    if (participantResults.length === 0) {
        return new Duration(0);
    }
    
    // Sum all durations using reduce
    return participantResults.reduce(
        (total, result) => total.plus(result.duration),
        new Duration(0) // Initial value
    );
 }
}

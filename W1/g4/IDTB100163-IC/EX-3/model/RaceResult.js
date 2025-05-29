import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
     // TODO
     /**
   * The participant's ID.
   * @type {string}
   */
  participantId;

  /**
   * The type of sport.
   * @type {string}
   */
  sportType;

  /**
   * The duration of the race.
   * @type {Duration}
   */
  duration;

  /**
   * Creates a new RaceResult object.
   * @param {string} participantId - The participant's unique ID.
   * @param {string} sportType - The sport type.
   * @param {Duration} duration - The duration of the race.
   */
  constructor(participantId, sportType, duration) {
    this.participantId = participantId;
    this.sportType = sportType;
    this.duration = duration;
  }
}

/**
 * Manages a collection of race results.
 */
export class RaceResultManager {
  /**
   * List of race results.
   * @type {RaceResult[]}
   */
  raceResults = [];

  /**
   * Adds a new race result to the list.
   * @param {RaceResult} result - The race result to add.
   */
  addResult(result) {
    this.raceResults.push(result);
  }

  /**
   * Finds the fastest race result for a given sport.
   * @param {string} sportType - The sport type to search for.
   * @returns {RaceResult | null} The fastest race result or null if none found.
   */
  getFastestRace(sportType) {
    const filteredResults = this.raceResults.filter(result => result.sportType === sportType);
    return filteredResults.length
      ? filteredResults.reduce((fastest, current) => (current.duration._totalSeconds < fastest.duration._totalSeconds ? current : fastest))
      : null;
  }
 
  }
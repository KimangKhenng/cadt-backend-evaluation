import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
  /**
   * The participant's ID for the race result.
   * @type {string}
   */
  participant_id;

  /**
   * The sport type for the race result (e.g., 'swim', 'run').
   * @type {string}
   */
  sport;

  /**
   * The duration of the race.
   * @type {Duration}
   */
  time;

  /**
   * Constructs a RaceResult object.
   * @param {string} participant_id - The ID of the participant.
   * @param {string} sport - The sport type
   * @param {number} totalSeconds - The total race time in seconds.
   */
  constructor(participant_id, sport, duration) {
    this.participant_id = participant_id;
    this.sport = sport;
    this.time = duration;
  }
}

/**
 * A list of race results.
 * @type {Array<RaceResult>}
 */
export const raceResults = [];
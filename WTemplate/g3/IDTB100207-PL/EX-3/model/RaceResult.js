import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
       /**
   * @type {string}
   */
  participantId;

  /**
   * @type {string}
   */
  sport;

  /**
   * @type {Duration}
   */
  duration;

  /**
   * Creates a new RaceResult.
   * @param {string} participantId - The participant's ID.
   * @param {string} sport - The type of sport.
   * @param {Duration} duration - The duration of the race.
   */
  constructor(participantId, sport, duration) {
    this.participantId = participantId;
    this.sport = sport;
    this.duration = duration;
  }

  }
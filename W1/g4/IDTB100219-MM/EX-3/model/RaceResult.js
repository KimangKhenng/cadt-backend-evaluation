import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
  // TODO
  /**
   * Particicpant's ID
   * @type {string}
   */
  _participantId;

  /**
   * Type of sport
   * @type {string}
   */
  _sportType;

  /**
   * Duration of race
   * @type {Duration}
   */
  _duration;

  /**
   * Create new race result
   * @param {string} participantId - Participant's ID
   * @param {string} sportType - Type of sport
   * @param {Duration} duration - Duration of race
   */

  constructor(participantId, sportType, duration) {
    this._participantId = participantId;
    this._sportType = sportType;
    this._duration = duration;
  }

  toJSON() {
    return {
      participant_id: this._participantId,
      sport: this._sportType,
      time: this._duration.toString()
    }
  }

}

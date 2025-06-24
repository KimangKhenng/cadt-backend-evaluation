import { Duration } from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type.
 */
export class RaceResult {
  /**
   * @type {string}
   * @private
   */
  _participantId;

  /**
   * @type {string}
   * @private
   */
  _sportType;

  /**
   * @type {Duration}
   * @private
   */
  _duration;

  get participantId() {
     return this._participantId;
   }
   
   get sportType() {
     return this._sportType;
   }
   
   get duration() {
     return this._duration;
   }   

  /**
   * Creates a new RaceResult.
   * @param {string} participantId 
   * @param {string} sportType 
   * @param {Duration} duration 
   */
  constructor(participantId, sportType, duration) {
    this._participantId = participantId;
    this._sportType = sportType;
    this._duration = duration;
  }
}
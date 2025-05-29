import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
     /**
     * The participant's unique identifier
     * @type {string}
     * @private
     */
    _participantId;

    /**
     * The type of sport
     * @type {string}
     * @private
     */
    _sportType;

    /**
     * The duration of the race
     * @type {Duration}
     * @private
     */
    _duration;

     /**
      * Creates a new RaceResult instance.
      * @param {string} participantId - The participant's unique identifier.
      * @param {string} sportType - The type of sport.
      * @param {Duration} duration - The duration of the
      */
     constructor(participantId, sportType, duration) {
          this._participantId = participantId;
          this._sportType = sportType;
          this._duration = duration;
     }

     /**
     * Gets the participant ID
     * @returns {string} The participant's ID
     */
    getParticipantId() {
          return this._participantId;
     }

     /**
      * Gets the sport type
      * @returns {string} The sport type
      */
     getSportType() {
          return this._sportType;
     }

     /**
      * Gets the duration
      * @returns {Duration} The race duration
      */
     getDuration() {
          return this._duration;
     }

     /**
      * Creates a string representation of the race result
      * @returns {string} The string representation
      */
     toString() {
          return `Participant ${this._participantId} - ${this._sportType}: ${this._duration.toString()}`;
     }

  }
import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
     // The constructor of the class
     /**
      * The participant ID
      * @type {string}
      * @private
      */
     _participantId;
     /**
      * The sport type of the participant
      * @type {string}
      * @private
      */
     _sportType;
     /**
      * The duration of the
      * @type {Duration}
      * @private
      */
     _duration;
     
     
     // The constructor of the class
     /**
      * Creates a new RaceResult object.
      * @param {string} participantId - The ID of the participant.
      * @param {string} sportType - The sport type of the participant.
      * @param {Duration} duration - The duration
      */
     constructor(participantId, sportType, duration) {
          this._participantId = participantId;
          this._sportType = sportType;
          this._duration = duration;
     }

     
     

  }
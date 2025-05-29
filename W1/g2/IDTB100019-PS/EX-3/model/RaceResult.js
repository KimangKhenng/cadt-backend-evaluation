import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
     /**
      * the name of the participant
      * @type {string}
      * @private  
      */
     _participantId;

     /**
      * the type of the sport 
      * @type {string}
      * @private  
      */
     _sport;

     /**
      * the duration
      * @type {Duration}
      * @private  
      */
     _duration;

     /**
      * Create a new RaceResult result.
      * @param {string} participantId - The ID of the participant.
      * @param {string} sport - The type of the sport.
      * @param {Duration} duration - The race time.
      */

     constructor (participantId, sport, duration) {
          this._participantId = participantId;
          this._sport = sport;
          this._duration = duration;
     }
  }
import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
     
          // TODO
     /** participant ID
      * @type {string}
      * @private
      */

     _paticipantID;

     /**Sport type
      * @type {string}
      * @private
      */
     _sportType;

     /** Duration
      * @type {Duration}
      * @private
      */
     _duration;

     /** Create a new RaceResult Instant
      * @param {string} participantID -ID of participant
      * @param {string} sportType -Type of sport
      * @param {Duration} duration -Duration
      */
     constructor(participantID,sportType,duration){
          this._paticipantID = participantID;
          this._sportType = sportType;
          this._duration = duration;
     }
     /** Get participantID
      * @returns {string}
      */
     getParticipantID(){
          return this._paticipantID;
     }
     /** Get sportType
      * @returns {string}
      */
     getSportType(){
          return this._sportType;
     }
     /** Get Duration
      * @returns {Duration}
      */
     getDuration(){
          return this._duration;
     }

  }
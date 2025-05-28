import Duration from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
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

     /**
      * Create a new RaceResult object.
      * @param {string} participantId 
      * @param {string} sportType 
      * @param {Duration} duration 
      */

     constructor(participantId, sportType, duration) {
          // TODO
         this._participantId = participantId;
         this._sportType = sportType;
         this._duration = duration;
     }

     /**
      * A list of race results
      * @type {Array<RaceResult>}
      * @private
      */
     _raceResults = [];

     get participantId() {
      return this._participantId;
    }
  
    get sportType() {
      return this._sportType;
    }
  
    get duration() {
      return this._duration;
    }
  }
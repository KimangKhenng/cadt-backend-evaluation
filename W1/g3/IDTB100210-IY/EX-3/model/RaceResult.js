import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO

       /** participant ID
        * @private
        * @type {string}
        */
           _participantId;
          
           /** sport type
            * @private
            * @type {string}
            */
          _sportType;

          /** duration 
           * @private
           * @type {number}
           */
          _duration;
          constructor(participantId, sportType, duration) {
               this._participantId = participantId;
               this._sportType = sportType;
               this._duration = duration; // Duration object

               RaceResult.raceResult.push(this); // Add the instance to the static array
          }
          /**
           * static method to get all race results
           * @returns{RaceResult[]}
           */
          static getAllRaceResults() {
               return RaceResult.raceResult;}
     
  }
import Duration from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

     // TODO
     /**
      * The participant ID in the race.
      * @type {string}
     */
     participantId;

     /**
      * The sport type for the race.
      * @type {string}
     */
     sportType;

     /**
      * The duration of the race.
      * @type {Duration}
     */
     duration;

     /**
      * List of race results.
      * @type {Array<RaceResult>}
      * @private
     */
     static raceResults = [];

     /**
      * Creates a new Duration object.
      * @param {string} participantId - The participant Id
      * @param {string} sportType - Sport type the user play
      * @param {number} duration
     */
     constructor(participantId, sportType, duration){
          this.participantId = participantId,
          this.sportType = sportType,
          this.duration = duration;
     }


  }
  
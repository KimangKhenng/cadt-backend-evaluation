import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given participant and sport type
 */
export class RaceResult {
     // TODO
     /**
      * The ID of the participant.
      * @type {string}
      * @private
      */
     _participantId;
     /**
      * The sport type.
      * @type {string}
      * @private
      */
     _sport;
     /**
      * The duration of the race
      * @type {Duration}
      * @private
      */
     _duration;

     constructor(participant, sport, duration) {
          this._participantId = participant;
          this._sport = sport;
          this._duration = duration;
     }
  }
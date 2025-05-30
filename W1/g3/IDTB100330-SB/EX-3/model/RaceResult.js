import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
     /** @type {string} */ participantId;
     /** @type {string} */ sport;
     /** @type {Duration} */ duration;
     /** 
      * participantId
      * sport
      * duration
      */
     constructor(participantId, sport, duration) {    
          this.participantId = participantId;
          this.sport = sport;
          this.duration = duration;
     }
}
  
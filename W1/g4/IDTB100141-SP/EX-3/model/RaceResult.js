import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
       /**
      * @param {string} participantId 
      * @param {string} sport 
      * @param {Duration} duration 
      */
     constructor(participantId, sport, duration) {
          this.participantId = participantId;
          this.sport = sport;
          this.duration = duration;
     }
  }
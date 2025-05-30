import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
     /** @type {string} */
     participant_id;
     /** @type {string} */
     sport;
     /** @type {Duration} */
     time;

     constructor(participant_id, sport, time) {
          this.participant_id = participant_id;
          this.sport = sport;
          this.time = time;
     }
     
}
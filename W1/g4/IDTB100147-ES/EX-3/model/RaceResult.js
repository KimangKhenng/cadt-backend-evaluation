import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
       /**
        * The participant's ID
        * @type {string}
        */
       participantId;

       /**
        * The type of sport (e.g., "swim", "run")
        * @type {string}
        */
       sport;

       /**
        * The duration of the race
        * @type {Duration}
        */
       duration;

       /**
        * Class attributes
        * creates a new RaceResult instance
        * @param {string} participantId 
        * @param {string} sport
        * @param {Duration} duration 
        */

       constructor(participantId,sport,duration){
          this.participantId = participantId;
          this.sport = sport;
          this.duration = duration;
       }
  }
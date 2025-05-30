import { Duration } from "./Duration.js";
export class RaceResult {
     /**
      * The unique ID of the participant.
      * @type {string}
      * @public
      */
     participant_id;

     /**
      * The type of sport for the race.
      * @type {string}
      * @public
      */
     sport_type;

     /**
      * The duration of the race.
      * @type {Duration}
      * @public
      */
     duration;

     /**
     * Creates a new Duration object.
     * @param {string} participant_id - The string  of participant_id.
     * @param {string} sport_type - The string  of sport Type.
     * @param {Duration} duration - The string of Duration.
     * 
     */
     constructor(participant_id, sport_type, duration) {
          this.duration = duration;
          this.participant_id = participant_id;
          this.sport_type = sport_type;
     }
     resultList = ()=>{
          return [this.participant_id,this.sport_type,this.duration]
     }
}
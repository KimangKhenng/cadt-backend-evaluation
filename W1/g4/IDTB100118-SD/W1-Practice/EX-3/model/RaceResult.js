import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
     /**
     * Creates a new RaceResult instance.
     * @param {string} participant_id - The id of the participant.
     * @param {string} sportType - The type of sport (e.g., running, swimming).
     * @param {Duration} raceTime - The race time.
     */

     /** constuctor */
     constructor(participant_id,sportType,raceTime){
      this.participant_id = participant_id;
      this.sportType= sportType;
      this.raceTime = raceTime;
     }

     /**
      * Format the data
      * @return {Object} A plain object to insert into json
      */
     
     toJSON(){
      return{
        participant_id: this.participant_id,
        sportType: this.sportType,
        raceTime: this.raceTime.toString(),
      }
     }
     }  
import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
     /**
      * @param {string} participantId - The ID of the participant.
      * @param {string} sportType - The type of sport.
      * @param {Duration} duration - The duration of the race.
      */
     constructor(participantId, sportType, duration) {
       if (!(duration instanceof Duration)) {
         throw new TypeError("duration must be an instance of Duration");
       }
       this.participantId = participantId;
       this.sportType = sportType;
       this.duration = duration;
     }
   }
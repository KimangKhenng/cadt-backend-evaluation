import  Duration  from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
       // TODO

     /**
      * @param {string} participantId - The ID of the participant.
      * @param {string} sport - The sport type.
      * @param {Duration} time - The duration of the race.
      */
     constructor(participantId, sport, time) {
          this.participantId = participantId;
          this.sport = sport;
          this.time = time;
     }
  }
import Duration from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
     /**
      * The unique identifier of the participant.
      * @type {string}
      */
     participantId;
 
     /**
      * The sport in which the participant competed.
      * @type {string}
      */
     sport;
 
     /**
      * The duration taken by the participant to complete the race.
      * @type {Duration}
      */
     duration;
 
     /**
      * Creates a new RaceResult instance.
      * @param {string} participantId - The unique identifier of the participant.
      * @param {string} sport - The sport in which the participant competed.
      * @param {Duration} duration - The duration taken to complete the race.
      */
     constructor(participantId, sport, duration) {
         this.participantId = participantId;
         this.sport = sport;
         this.duration = duration;
     }
 }

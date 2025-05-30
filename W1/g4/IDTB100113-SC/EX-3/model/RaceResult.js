import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
       /**
        * id of participant
        * @type {string}
        */
       participantId;
       /**
        * type of sport
        * @type {string}
        */
       sportType;
       /**
        * duration of race
        * @type {Duration}
        */
       duration;
       /* 
        * @param {string} participantId 
        * @param {string} sportType 
        * @param {Duration} duration 
        */
       
       constructor(participantId, sportType, duration){
          this.participantId = participantId;
          this.sportType = sportType;
          this.duration = duration;
       }
  }
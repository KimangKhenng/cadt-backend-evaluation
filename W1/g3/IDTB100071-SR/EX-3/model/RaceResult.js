import Duration  from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
       // TODO
     /**
      * Participant ID
      * @type {string}
      * @public
      */
     participant_id;

     /**
      * Sport type
      * @type {string}
      * @public
      */
     sport;

     /**
      * Duration
      * @type {Duration}
      * @public
      */
     time;

     /**
      * Construct new RaceResult
      * @param {string} id - Participant id
      * @param {string} type - Sport type
      * @param {Duration} duration - Duration
      */
     constructor(id, type, duration) {
          this.participant_id = id;
          this.sport = type;
          this.time = duration;
     }
     results = () => { return [this.participant_id, this.sport, this.time]; }
     
  }
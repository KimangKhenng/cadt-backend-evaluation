import Duration from "./Duration.js";
/**
 *   Represents a single race result entry.
 */
class RaceResult {
     /**
      * @param {string} participant_id
      * @param {string} sport
      * @param {Duration} time
      */

     constructor(participant_id, sport, time) {
          this.participant_id = participant_id
          this.sport = sport,
          this.time = time
     }
}

export default RaceResult

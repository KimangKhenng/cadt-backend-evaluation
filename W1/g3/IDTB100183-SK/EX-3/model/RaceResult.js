import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
     /**
   * Creates a new RaceResult instance.
   * @param {string} participant - The name of the participant.
   * @param {string} sport - The type of sport.
   * @param {Duration} time - The duration it took to finish the race.
   */
     constructor(participant,sport,time){
          if(!(time instanceof Duration)){
               throw new error("This must be an instance of duration");
          }
          this.participant = participant;
          this.sport= sport;
          this.time=time;
     }
     /**
   * Returns a string representation of the race result.
   * @returns {string} The formatted result.
   */
  toString() {
     return `${this.participant} completed the ${this.sport} race in ${this.time.toString()}`;
   }
   /**
   * Compares this result to another by time.
   * @param {RaceResult} other - Another race result.
   * @returns {number} Negative if this is faster, positive if slower, 0 if equal.
   */
  compareTo(other) {
     return this.time._totalSeconds - other.time._totalSeconds;
   }
  }
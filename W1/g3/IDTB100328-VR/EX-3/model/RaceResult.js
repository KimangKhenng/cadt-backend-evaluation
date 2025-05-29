import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

     // TODO

     /**
      * The id of the participant
      * @type {String}
      * @private
      */
     _id

     /**
      * The sport type of the participant
      * @type {String}
      * @private
      */
     _type 

     /**
      * 
      * @type {Duration}
      * @private
      */
     _duration

     /**
      * Create a new RaceResult object
      * @param {String} id - The unique identifier for the race result
      * @param {String} type - The type of race
      * @param {Duration} duration - The duration of the race in seconds
      */
     constructor(id, type, duration) {
          this._id = id
          this._type = type
          this._duration = duration
     }

     get id()
     {
          return this._id
     }

     get type() 
     {
          return this._type
     }

     get duration()
     {
          return this._duration
     }

      /**
   * Convert the race result to a plain object (useful for saving to JSON)
   * @returns {Object} Plain object representing the race result
   */
   toObject() {
     return {
        participant_id: this._id,
        sport: this._type,
        time: {
           _totalSeconds: this._duration.totalSeconds
        }
     };
  }

}
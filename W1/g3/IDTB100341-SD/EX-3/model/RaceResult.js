import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

     // TODO
     /**
     * @type {string}
     * @private
     */
     _participant_id;
     /**
     * @type {string}
     * @private
     */
     _sport;

     /**
     * @type {Duration}
     * @private
     */
     _duration;

     /**
     * Creates a new RaceResult.
     * @param {string} participantId
     * @param {string} sport
     * @param {Duration} duration
     */
     constructor(participantId, sport, duration) {
          this._participant_id = participantId;
          this._sport = sport;
          this._duration = duration;
     }
     get participantId() {
          return this._participant_id;
     }
        
     get sport() {
          return this._sport;
     }
        
     get duration() {
          return this._duration;
     }
 

  }
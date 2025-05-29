import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
        /**
   * @param {string} participantId - The ID of the participant.
   * @param {string} sport - The type of sport.
   * @param {Duration} time - The race duration.
   */
  constructor(participantId, sport, time) {
   this._participantId = participantId;
   this._sport = sport;
   this._time = time;
 }
 
}
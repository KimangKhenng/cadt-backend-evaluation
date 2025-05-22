import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
       // TODO
      /**
       * @param {string} particicpantId - The ID of the participant.
       * @param {string} sport - The sport name.
       * @param {Duration} duration - The race duration.
       */
      constructor(particicpantId, sport, duration) {
        this.particicpantId = particicpantId;
        this.sport = sport;
        this.duration = duration;
      }
  }
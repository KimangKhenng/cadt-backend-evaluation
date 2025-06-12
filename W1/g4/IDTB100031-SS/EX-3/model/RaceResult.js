import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
         /**
           * @param {string} participantId - The participant ID 
           * @param {string} sport - The sport type
           * @param {Duration} duration - The duration of the race
           */
         constructor(participantId, sport, duration) {
          this.participantId = participantId;
          this.sport = sport;
          this.duration = duration;
        }

        /**
         * Converts the race result to a human-readable string.
         * @returns {string} Formatted as "participantId - sport: Xm Ys".
         */
        toString() {
            return `${this.participantId} - ${this.sport}: ${this.duration.toString()}`;
        }

        /**
         * Custom JSON serialization for RaceResult.
         * @returns {Object} A plain object suitable for JSON serialization.
         */
        toJSON() {
          return {
              participantId: this.participantId,
              sport: this.sport,
              duration: {
                  seconds: this.duration.seconds // Using the getter
              }
          };
      }
  
      // Custom reviver for parsing
      static fromJSON(json) {
          return new RaceResult(
              json.participantId,
              json.sport,
              new Duration(json.duration?.seconds)
          );
      }
  }
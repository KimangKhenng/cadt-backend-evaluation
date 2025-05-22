import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
     /**
      * Creates a new race result
      * @param {string} participantId - The ID of the participant
      * @param {string} sportType - The type of sport
      * @param {Duration} duration - The duration of the race
      */
     constructor(participantId, sportType, duration) {
          this.participantId = participantId;
          this.sportType = sportType;
          this.duration = duration;
     }

     /**
      * Gets the participant ID
      * @return {string} The participant ID
      */
     getParticipantId() {
          return this.participantId;
     }

     /**
      * Gets the sport type
      * @return {string} The sport type
      */
     getSportType() {
          return this.sportType;
     }

     /**
      * Gets the duration
      * @return {Duration} The duration
      */
     getDuration() {
          return this.duration;
     }

     /**
      * Sets a new duration
      * @param {Duration} duration - The new duration
      */
     setDuration(duration) {
          this.duration = duration;
     }

     /**
      * Returns a string representation of the race result
      * @return {string} String representation
      */
     toString() {
          return `Participant: ${this.participantId}, Sport: ${this.sportType}, Time: ${this.duration.toString()}`;
     }
}
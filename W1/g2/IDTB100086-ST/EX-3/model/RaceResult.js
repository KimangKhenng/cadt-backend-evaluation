import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given participant and sport type
 */
export class RaceResult {
  /**
   * Creates a RaceResult instance.
   * @param {string} participantId - The participant's ID.
   * @param {string} sport - The sport type.
   * @param {Duration} time - The time duration for this race result.
   */
  constructor(participantId, sport, time) {
    this.participant_id = participantId;
    this.sport = sport;
    this.time = time;
  }

  /**
   * Get the participant's ID.
   * @returns {string} The participant ID.
   */
  get participantId() {
    return this.participant_id;
  }

  /**
   * Get the sport type.
   * @returns {string} The sport type.
   */
  get sportType() {
    return this.sport;
  }

  /**
   * Get the time duration.
   * @returns {Duration} The time duration.
   */
  get duration() {
    return this.time;
  }
}
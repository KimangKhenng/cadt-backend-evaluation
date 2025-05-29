import { Duration } from './Duration.js';

export class RaceResult {
  /**
   * @type {string}
   */
  participantId;

  /**
   * @type {string}
   */
  sport;

  /**
   * @type {Duration}
   */
  duration;

  /**
   * Creates a new RaceResult object.
   * @param {string} participantId - The ID of the participant.
   * @param {string} sport - The sport type.
   * @param {Duration} duration - The duration of the race.
   */
  constructor(participantId, sport, duration) {
    this.participantId = participantId;
    this.sport = sport;
    this.duration = duration;
  }
}
import Duration from "./Duration.js";

/**
 * This class handles a single race result for a given participant and sport type.
 */
export class RaceResult {
  /**
   * The participant's identifier.
   * @type {string}
   */
  participantId;

  /**
   * The type of sport.
   * @type {string}
   */
  sportType;

  /**
   * The duration of the race.
   * @type {Duration}
   */
  duration;

  /**
   * Creates a new RaceResult instance.
   * @param {string} participantId - The participant's identifier.
   * @param {string} sportType - The type of sport.
   * @param {Duration} duration - The duration of the race.
   */
  constructor(participantId, sportType, duration) {
    this.participantId = participantId;
    this.sportType = sportType;
    this.duration = duration;
  }

  /**
   * List of race results.
   * @type {RaceResult[]}
   */
  static raceResults = [];
}

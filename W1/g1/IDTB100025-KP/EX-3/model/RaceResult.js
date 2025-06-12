import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
static allResults = [];

  /**
   * @param {string} participantId - Participant's ID
   * @param {string} sportType - Type of sport
   * @param {Duration} duration - Duration of the race
   */
  constructor(participantId, sportType, duration) {
    this.participantId = participantId;
    this.sportType = sportType;
    this.duration = duration;

    RaceResult.allResults.push(this);
  }
  }
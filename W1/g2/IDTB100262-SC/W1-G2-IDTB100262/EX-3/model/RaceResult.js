import { Duration } from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type.
 */
export class RaceResult {
  constructor(participantId, sport, time) {
    this.participant_id = participantId;
    this.sport = sport;
    this.time = time; // time is a Duration object
  }
}
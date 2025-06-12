import { Duration } from "./Duration.js";
/**
 * This class handles a single race time for a given participant and sport type
 */
export class RaceResult {
  constructor(participantId, sport, time) {
    this.participantId = participantId;
    this.sport = sport;
    this.time = time; // instance of Duration
  }

  toJSON() {
    return {
      participant_id: this.participantId,
      sport: this.sport,
      time: {
        _totalSeconds: this.time.totalSeconds
      }
    };
  }

  static fromJSON(json) {
    return new RaceResult(
      json.participant_id,
      json.sport,
      new Duration(json.time._totalSeconds)
    );
  }
}

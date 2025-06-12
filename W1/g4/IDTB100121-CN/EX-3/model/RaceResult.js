import Duration from "./Duration.js";

/**
 * This class handles a single race time for a given participant and sport type.
 */
export class RaceResult {
  /**
   * Creates a new RaceResult instance.
   * @param {string} participantId - The ID of the participant.
   * @param {string} sport - The type of sport (e.g., "swim", "run").
   * @param {Duration} time - The duration of the race.
   */
  constructor(participantId, sport, time) {
    if (typeof participantId !== "string" || typeof sport !== "string" || !(time instanceof Duration)) {
      throw new Error("Invalid arguments provided to RaceResult constructor.");
    }
    this.participantId = participantId;
    this.sport = sport;
    this.time = time;
  }

  /**
   * Converts the RaceResult instance to a plain object for serialization.
   * @returns {Object} A plain object representation of the RaceResult.
   */
  toJSON() {
    return {
      participant_id: this.participantId,
      sport: this.sport,
      time: {
        _totalSeconds: this.time._totalSeconds,
      },
    };
  }

  /**
   * Creates a RaceResult instance from a plain object.
   * @param {Object} json - The plain object representation of a RaceResult.
   * @returns {RaceResult} A new RaceResult instance.
   */
  static fromJSON(json) {
    if (
      typeof json.participant_id !== "string" ||
      typeof json.sport !== "string" ||
      typeof json.time?._totalSeconds !== "number"
    ) {
      throw new Error("Invalid JSON format for RaceResult.");
    }
    return new RaceResult(
      json.participant_id,
      json.sport,
      new Duration(json.time._totalSeconds)
    );
  }
}
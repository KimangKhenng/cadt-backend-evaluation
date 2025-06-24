import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs/promises";
import path from "path";

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  addRaceResult(result) {
    this._raceResults.push(result);
  }

  async saveToFile(filePath) {
    try {
      const dir = path.dirname(filePath);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(
        filePath,
        JSON.stringify(
          this._raceResults.map((r) => r.toJSON()),
          null,
          2
        )
      );
      return true;
    } catch (error) {
      console.error("Error saving to file:", error);
      return false;
    }
  }

  async loadFromFile(filePath) {
    try {
      

      // Verify file exists first
      try {
        await fs.access(filePath);
      } catch {
        console.error(`File not found: ${filePath}`);
        return false;
      }

      const data = await fs.readFile(filePath, "utf-8");
      console.log( data);

      return true;
    } catch (error) {
      console.error("Error loading file:", error);
      return false;
    }
  }


  getTimeForParticipant(participantId, sport) {
    const result = this._raceResults.find(
      (r) => r.participantId === participantId && r.sport === sport
    );
    return result ? result.duration : null;
  }

  getTotalTimeForParticipant(participantId) {
    const results = this._raceResults.filter(
      (r) => r.participantId === participantId
    );

    if (results.length === 0) return null;

    return results.reduce(
      (total, current) => total.plus(current.duration),
      new Duration(0)
    );
  }
}

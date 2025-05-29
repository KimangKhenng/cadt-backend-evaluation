import Duration from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs";
import path from "path";

export class RaceResultsService {
    _raceResults = [];

    get raceResults() {
        return this._raceResults;
    }

    addRaceResult(result) {
        if (result instanceof RaceResult) {
            this._raceResults.push(result);
        } else {
            throw new Error("Invalid RaceResult object.");
        }
    }

    saveToFile(filePath) {
        try {
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            
            const data = JSON.stringify(this._raceResults.map(r => ({
                participantId: r.participantId,
                sport: r.sport,
                time: r.duration._totalSeconds
            })), null, 2);
            
            fs.writeFileSync(filePath, data, "utf-8");
        } catch (error) {
            console.error("Error saving to file:", error);
        }
    }

    loadFromFile(filePath) {
        try {
            const data = fs.readFileSync(filePath, "utf-8");
            const parsedData = JSON.parse(data);
            this._raceResults = parsedData.map(
                item => new RaceResult(
                    item.participantId || item.participant_id, // Handle both cases
                    item.sport,
                    new Duration(item.time._totalSeconds || item.time) // Handle both formats
                )
            );
            return true;
        } catch (error) {
            console.error("Error loading from file:", error);
            return false;
        }
    }

    getTimeForParticipant(participantId, sport) {
        const result = this._raceResults.find(
            r => r.participantId === participantId && r.sport === sport
        );
        return result ? result.duration : null;
    }

    getTotalTimeForParticipant(participantId) {
        const participantResults = this._raceResults.filter(
            r => r.participantId === participantId
        );

        if (participantResults.length === 0) {
            return null;
        }

        const totalMilliseconds = participantResults.reduce(
            (sum, result) => sum + result.duration.toMilliseconds(),
            0
        );

        return Duration.fromMilliseconds(totalMilliseconds);
    }
}
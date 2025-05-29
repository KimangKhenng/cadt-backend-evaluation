import fs from 'fs';
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";

export class RaceResultsService {
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  addRaceResult(result) {
    this._raceResults.push(result);
  }

  saveToFile(filePath) {
    const data = JSON.stringify(this._raceResults, null, 2);
    fs.writeFileSync(filePath, data, 'utf8');
  }

  loadFromFile(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const parsed = JSON.parse(data);
      
      this._raceResults = parsed.map(item => new RaceResult(
        item.participantId,
        item.sportType,
        new Duration(item.duration)
      ));
      
      return true;
    } catch (error) {
      console.error('Error loading file:', error);
      return false;
    }
  }

  getTimeForParticipant(participantId, sport) {
    const result = this._raceResults.find(r => 
      r.participantId === participantId && 
      r.sportType === sport
    );
    return result?.duration || null;
  }

  getTotalTimeForParticipant(participantId) {
    const results = this._raceResults.filter(r => 
      r.participantId === participantId
    );
    
    return results.reduce((total, result) => 
      total.plus(result.duration), 
      new Duration(0)
    );
  }
}
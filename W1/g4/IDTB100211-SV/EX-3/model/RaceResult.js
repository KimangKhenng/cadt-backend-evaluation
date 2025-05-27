import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given participant and sport type
 */
export class  RaceResult {
	// TODO
     _participantID
     _sportType
     _duration
     constructor(participantID, sportType, duration){
          if(!(duration instanceof Duration)){
               throw error("duration is not an object")
          }
          this._participantID=participantID
          this._sportType=sportType
          this._duration=duration.toString()
     }
}

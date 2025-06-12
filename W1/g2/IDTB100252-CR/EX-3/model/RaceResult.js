import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

          // TODO
          participantID;
          sportType;
          duration;
          constructor(participantID, sportType, duration){
          this.participantID = participantID;
          this.sportType = sportType;
          this.duration = duration;
          }
          toJSON(){
          return {
                    participantID: this.participantID,
                    sportType: this.sportType,
                    duration: this.duration._totalSeconds
          };
     }

}
  
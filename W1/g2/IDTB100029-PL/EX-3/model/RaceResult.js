/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
       _participantId;
       _sportType;
       _duration;

     constructor(participantId,sportType,duration){
          this._participantId = participantId;
          this._duration = duration;
          this._sportType =sportType;
      }
  

  }
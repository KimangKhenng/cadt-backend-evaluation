import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

     // TODO
     _id;
     _sportType;
     _duration;

     constructor(id, sportType, duration) {
          this._id = id;
          this._sportType = sportType;
          this._duration = duration;
     }

     getID() {
          return this._id;
     }

     getSportType() {
          return this._sportType;
     }

     getDuration() {
          return this._duration;
     }

     toString() {
          return `${this._name} - ${this._sportType} - ${this._duration.toString()}`;
     }
}
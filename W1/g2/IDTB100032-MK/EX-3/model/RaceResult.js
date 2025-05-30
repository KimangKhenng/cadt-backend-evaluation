import { Duration } from "./Duration.js";


export class RaceResult {
 
  constructor(participant, sportType, time) {
    if (typeof participant !== "string" || participant.trim() === "") {
      throw new Error("Participant must be a non-empty string.");
    }
    if (typeof sportType !== "string" || sportType.trim() === "") {
      throw new Error("Sport type must be a non-empty string.");
    }
    if (!(time instanceof Duration)) {
      throw new Error("Time must be an instance of Duration.");
    }

    this._participant = participant;
    this._sportType = sportType;
    this._time = time;
  }

  
  get participant() {
    return this._participant;
  }

  get sportType() {
    return this._sportType;
  }

  get time() {
    return this._time;
  }

  toString() {
    return `Participant: ${this._participant}, Sport Type: ${this._sportType}, Time: ${this._time.toString()}`;
  }
}


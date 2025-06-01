import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {
  // TODO
  /**
   * A participant id
   * @type {string}
   */
  _id;

  /**
   * A sport type
   * @type {string}
   */
  _sportType;

  /**
   * A duration constructor
   * @type {Duration}
   */
  _duration;

  /**
   * Create a new RaceResult object.
   * @param {string}
   * @param {string}
   * @param {Duration}
   */
  constructor(id, type, duration) {
    this._id = id;
    this._sportType = type;
    this._duration = duration;
  }
}

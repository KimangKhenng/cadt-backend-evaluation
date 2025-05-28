import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import fs from "fs";

/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
	/**
	 * The list of race results.
	 * @type {Array<RaceResult>}
	 * @private
	 */
	_raceResults = [];

	get raceResults() {
		return this._raceResults;
	}

	/**
	 * Adds a new race result to the race list.
	 * @param {RaceResult} result - The price result.
	 */
	addRaceResult(result) {
		// TODO
		this._raceResults.push(result);
	}

	/**
	 * Saves the race results list to a JSON file.
	 * @param {string} filePath - The path to the file where data should be saved.
	 */
	saveToFile(filePath) {
		// TODO
		fs.writeFileSync(filePath, JSON.stringify(this._raceResults, null, 2));
	}

	/**
	 * Loads the race results list from a JSON file.
	 * @param {string} filePath - The path to the file to load data from.
	 * @returns {boolean} True if loading was successful, false otherwise.
	 */
	loadFromFile(filePath) {
		// TODO
		const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
		this._raceResults = data.map((element) => {
			return new RaceResult(
				element._participantID,
				element._sportType,
				new Duration(element._duration._totalSeconds)
			);
		});
	}

	/**
	 * Retrieves the race time for a given participant and sport.
	 * @param {string} participantId - Participant ID.
	 * @param {string} sport - Sport name.
	 * @returns {Duration|null} Duration if found, else null.
	 */
	getTimeForParticipant(participantId, sport) {
		// TODO
		const data = this._raceResults.find(
			(item) =>
				item._participantID === participantId &&
				item._sportType === sport
		);
		return data._duration;
	}

	/**
	 * Computes the total time for a given participant by summing their race times.
	 * @param {string} participantId - The ID of the participant.
	 * @returns {Duration|null} The total Duration object if found, otherwise null.
	 */
	getTotalTimeForParticipant(participantId) {
		// TODO
		const data = this._raceResults.filter(
			(item) => item._participantID === participantId
		);
		return data
			.map((item) => item._duration)
			.reduce((acc, reg) => acc.plus(reg));
	}
}

import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
const loadedSuccessfully = raceResultService.loadFromFile("./data/raceScores.json");

// Print the resuts
// console.log(raceResultService.raceResults);
if (loadedSuccessfully) {
    console.log("Loaded race results:");
    
    // Option 1: Display formatted results
    raceResultService._raceResults.forEach(result => {
        console.log(result.toString());
    });
    
    // Option 2: Display as table
    console.table(raceResultService._raceResults.map(r => ({
        Participant: r.participantId,
        Sport: r.sport,
        Time: r.duration.toString()
    })));
} else {
    console.error("Failed to load race results");
}

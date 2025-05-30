import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize RaceResults
const raceResultService = new RaceResultsService();

async function loadAndDisplayResults() {
    try {
        
        const loaded = await raceResultService.loadFromFile("./race-scores/data/raceScores.json");
        
        if (!loaded) {
            console.error("Failed to load race results");
            return;
        }

    
        console.log("Loaded race results:");
        raceResultService.raceResults.forEach(result => {
            console.log(
                `Participant: ${result.participantId}, ` +
                `Sport: ${result.sport}, ` +
                `Time: ${result.duration.toString()}`
            );
        });

   
        const totalTime = raceResultService.getTotalTimeForParticipant("participant1");
        console.log(`Total time for participant1: ${totalTime.toString()}`); // Should show 6m 45s
    } catch (error) {
        console.error("Error:", error);
    }
}

loadAndDisplayResults();
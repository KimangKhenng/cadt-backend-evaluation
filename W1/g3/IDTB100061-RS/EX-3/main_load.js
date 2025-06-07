import { RaceResultsService } from "./service/RaceResultsService.js";

// Initialize and load
const raceResultService = new RaceResultsService();

if (raceResultService.loadFromFile("./data/raceScores.json")) {
    // Test getting specific time
    const swimTime = raceResultService.getTimeForParticipant("participant1", "swim");
    console.log("\nParticipant1's swim time:", swimTime ? swimTime.toString() : "Not found");

    // Test getting total time
    const totalTime = raceResultService.getTotalTimeForParticipant("participant1");
    console.log("Participant1's total time:", totalTime.toString());
}

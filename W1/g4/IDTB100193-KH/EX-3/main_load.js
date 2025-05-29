import { RaceResultsService } from "./service/RaceResultsService.js";


// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
raceResultService.loadFromFile("./data/raceScores.json");

// console.log(raceResultService.raceResults);

// // Print the resuts
// raceResultService.raceResults.forEach((result) => {
//     console.log(`Participant ID: ${result.getParticipantId()}`);
//     console.log(`Sport Type: ${result.getSportType()}`);
//     console.log(`Duration: ${result.getDuration().toString()}`);
//     console.log("-------------------------");
//   }
// );  

// Print table header
console.log("Participant ID\t\tSport\ttime");
console.log("-".repeat(50));

// Print results in table format
raceResultService.raceResults.forEach((result) => {
    console.log(
        `${result.getParticipantId()}\t\t${result.getSportType()}\t${result.getDuration().toString()}`
    );
});

// Print total time for participant1
console.log("\nTotal time for participant1:", 
    raceResultService.getTotalTimeForParticipant("participant1").toString());



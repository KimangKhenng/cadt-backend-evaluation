import fs from "fs";
const filePath = "./hello.txt";
// Write to a file (synchronously)
const main=async () => {
	await fs.writeFileSync(filePath, "Hello, Node.js beginner!");
	// Read the file (synchronously)
	const content = await fs.readFileSync(filePath, "utf8");
	console.log("File content:", content);
};

main()
import fs from "fs";

const filepath = "./hello.txt";

fs.writeFile(filepath, "Ot", (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }

  const content = fs.readFileSync(filepath, "utf8");
  console.log(content);
});

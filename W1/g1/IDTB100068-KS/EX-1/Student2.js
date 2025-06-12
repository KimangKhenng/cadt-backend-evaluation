import fs from "fs";

// convert the code from student1 to the async version 

const filePath = "D:/year_02/term_03/Backend Development/Lab01_Week01/Start code/EX-1/hello.txt";

fs.writeFile (filePath, "Hello, Node.js beginner!" , (writeErr) => {
    if (writeErr) {
        console.log ("Error: Cannot write to file");
        return ;
    } 

    console.log ("File written sucessfully!");

    fs.readFile (filePath, "utf8" , (readErr , content) => {
        if (readErr) {
            console.log ("Error : Cannot read from file");
            return;
        }

        console.log ("File Read sucessfully: ", content);
    })

});






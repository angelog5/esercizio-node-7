const fs = require("fs");

const content = "Hello, world.";

fs.writeFile("testfile.txt", content, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File has been written successfully.");
});

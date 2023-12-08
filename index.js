//fs - file system
const fs = require("fs");

const hello = "hello world";
console.log(hello);

//read files
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

//write files
const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written!");

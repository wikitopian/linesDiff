import fs from "fs";

import LinesDiff from "#LinesDiff";

const testFile1 = fs.readFileSync("./test/testFile1.txt", "utf8");
const testFile2 = fs.readFileSync("./test/testFile2.txt", "utf8");

const patch = LinesDiff.getPatch(testFile1, testFile2);

console.log("getPatch:\n", patch);

console.log("setPatch:\n", LinesDiff.setPatch(testFile1, patch));

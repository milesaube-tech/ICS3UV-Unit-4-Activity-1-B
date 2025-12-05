/**
 * @author Miles Aube
 * @version 1.0.0
 * @date 2025-12-05
 * @fileoverview This program prints out the letters of the alphabet from A to z.
 */

// variables
let characterASCIINumber: number = 0;

// start out printing the CAPITAL letters
console.log("The letters of the alphabet from A to Z are:");

// loop to print CAPITAL letters from A to Z
for (
  let characterASCIINumber = 65;
  characterASCIINumber <= 90;
  characterASCIINumber++
) {
  console.log(String.fromCharCode(characterASCIINumber));
}

// now print the small letters
console.log("\nThe letters of the alphabet from a to z are:");

// loop to print small letters from a to z
for (
  let characterASCIINumber = 97;
  characterASCIINumber <= 122;
  characterASCIINumber++
) {
  console.log(String.fromCharCode(characterASCIINumber));
}

console.log("\nDone.");
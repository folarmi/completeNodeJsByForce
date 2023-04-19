// Modules
//  By Default every file in nodeJs is a module
//  Modules Encapsulates code. Only share the minimum
// When you import a module, you invoke it, if you have a function that is called in that module.

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative");
require("./7-mind-grenade");

console.log(data);
sayHi("Folasayo");
sayHi(names.fola);
sayHi(names.oluwaseyi);

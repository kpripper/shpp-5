"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(compiler) {
    console.log("Hello from ".concat(compiler));
}
hello('TypeScript');
var greet_1 = require("./greet");
console.log((0, greet_1.sayHello)('TypeScript'));

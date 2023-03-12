"use strict";
console.log("Hi world from typescript!");
// Variables
var name = "Johan";
console.log("Hi, " + name);
console.log("¿Qué tal", name, "?");
console.log(`¿Como fua ${name}?`);
const PI = 3.14;
var n = 12;
n = "Hola bb :O";
let a, b, c;
a = "Typescript";
b = true;
c = 8.9;
console.log(a, b, c);
let taskList = ["Task 1", "Task 2"];
let anyList = ["Onions", 4];
let values = ["Hi", true, 56];
console.log(values.length);
var Running;
(function (Running) {
    Running[Running["R1"] = 1] = "R1";
    Running[Running["R2"] = 2] = "R2";
    Running[Running["R3"] = 3] = "R3";
})(Running || (Running = {}));
let stateRunning = Running.R2;
console.log(stateRunning);

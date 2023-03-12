console.log("Hi world from typescript!");

// Variables
var name: string = "Johan";


console.log("Hi, " + name);
console.log("¿Qué tal", name, "?")
console.log(`¿Como fua ${name}?`);

const PI = 3.14;
var n: any = 12;
n = "Hola bb :O"

let a:string, b:boolean, c:number;

a = "Typescript"
b = true
c = 8.9

console.log(a, b, c)



let taskList: string[] = ["Task 1", "Task 2"];

let anyList: any[] = ["Onions", 4]

let values: (string | number | boolean)[] = ["Hi", true, 56]

console.log(values.length)


enum Running {
    "R1" = 1,
    "R2",
    "R3"
}

let stateRunning: Running = Running.R2;

console.log(stateRunning)


// Interfaces

interface Task {
    name: string,
    status: string,
    urgencia: number
}

// We can make vars that they follow task interface

let taskOne: Task = {
    name: "Preparar la cena",
    status: "Completed",
    urgencia: 10
}


console.log(typeof taskOne)











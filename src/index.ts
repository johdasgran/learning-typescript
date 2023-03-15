import { ExecFileSyncOptionsWithBufferEncoding, ExecSyncOptionsWithBufferEncoding } from "child_process";

console.log("Hi world from typescript!");

// Variables
var name: string = "Johan";


// console.log("Hi, " + name);
// console.log("¿Qué tal", name, "?")
// console.log(`¿Como fua ${name}?`);

const PI = 3.14;
var n: any = 12;
n = "Hola bb :O"

let a:string, b:boolean, c:number;

a = "Typescript"
b = true
c = 8.9

// console.log(a, b, c)



let taskList: string[] = ["Task 1", "Task 2"];

let anyList: any[] = ["Onions", 4]

let values: (string | number | boolean)[] = ["Hi", true, 56]

// console.log(values.length)


enum Running {
    "R1" = 1,
    "R2",
    "R3"
}

let stateRunning: Running = Running.R2;

// console.log(stateRunning)


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


// console.log(typeof taskOne)
// console.log(taskOne.name)

// Types of TypeScript


type Product = {
    name: string,
    price: number
    year: number
}

let car: Product = {
    name: "Tesla",
    price: 26000,
    year: 2023
}

// console.log(`El ${car.name} tiene un costo de $${car.price}`);
// console.log(car.year === 2023 ? `El ${car.name} es el modelo nuevo del ${car.year}` : `El ${car.name} es el modelo viejo`)


// Fuctions

/**
 * 
 * @param name
 * Function that allow say Hi
 * 
 */
function sayHi(name:string) {
    console.log(`Hi, ${name}`)
}

// sayHi("Johan")

/**
 * 
 * @param name
 * Function that allow say Bye
 * 
 */
function sayBye(name?:string) {
    n = name ? `Bye, ${name}` : `Bye, quien quiera q seas`; 
    console.log(n)
}

// sayBye() //"Johan"


function sayHiOrBye(name:string, lastName?: string, morning?: boolean, night?: boolean) {
    if(morning){
        console.log(`Gmorning, ${name} ${lastName}`);
    }
    if(night){
        console.log(`Gbye, ${name} ${lastName}`)
    }
}

// sayHiOrBye("Johan", "Grandas", true, false)

function exampleReturn(name: string, lastName?: string): string | number{
    return `${name} ${lastName}` + 12;
}

const t = exampleReturn("This", "is 🔥 ");

// console.log(t)

function multiplesParams(...names: string[]): void{
    names.forEach((name)=>{
        console.log(name)
    })
}

// multiplesParams("H", "A", "L", "L", "O", "W", "I", "N")


type Mouse = {
    name: string,
    model: string,
    brand: string,
    price: number
}

let mouse: Mouse = {
    name: "Mouse Logitech L565",
    model: "L565",
    brand: "Logitech",
    price: 1200
}

const showMouse = (mouse: Mouse) => console.log(`${mouse.name}`); 

// showMouse(mouse)

const getPay = (mouse: Mouse, cobrar: () => string) => {
    if(mouse.price > 200) {
        return "nothing!"
    } else {
        cobrar()
    }
}

// Async Functions

async function exampleAsync(): Promise<string>{
    // await console.log("Tarea que se va a completar")
    // console.log("Tarea completa")
    return "Completa :)"
}

// exampleAsync()
// .then((resp) => {console.log(resp)})
// .catch((error)=>{console.log("Ha ocurrido un error", error)})



// Generators 

function* ejmGenerator() {
    // yiel ---> para emitir valores

    let i = 0;

    while(i<5){
        // Emitir valor incrementado
        yield i++;
    }
}

// Save generator function in a var

let g = ejmGenerator();

// console.log(g.next().value) // 0
// console.log(g.next().value) // 1
// console.log(g.next().value) // 2
// console.log(g.next().value) // 3
// console.log(g.next().value) // 4
// console.log(g.next().done) // true


// Worker

function* watcher(value: number) {
    yield value; // Emitimos el valor inicial
    yield* worker(value); // Llamamos a las emisiones del worker para que emita los valores
    yield value + 4; // Emitimos el valor final +4
}

function* worker(value: number) {
    yield value + 1; 
    yield value + 2; 
    yield value + 3; 
}

let generatorSaga = watcher(0)

// console.log(generatorSaga.next().value) // 0 - watcher
// console.log(generatorSaga.next().value) // 1 - worker
// console.log(generatorSaga.next().value) // 2 - worker
// console.log(generatorSaga.next().value) // 3 - worker
// console.log(generatorSaga.next().value) // 4 - watcher



// Persistencia de datos


// 1. localStorage 
// 2. sesionStorage
// 3. Cookies



import { deleteAllCookies, deleteCookie, setCookie } from "cookies-utils";
 
// more information about the options in documentation https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
const cookieOptions = {
  name: "darkMode", // string,
  value: "value", // string,
  maxAge: 10 * 60, // optional number (value in seconds),
  expires: new Date(2099, 10, 1), // optional Date,
};


// setInterval(()=>{
//     console.log("Tic tac")
// }, 100 )


// class Temporizador

class Temporizador {

    public finished?: () => void;

    public start(): void {
        setTimeout(()=>{
            // Comprobamos q exista la función finished como callback
            if(!this.finished) return;

            // Cuando haya pasado el tiempo, se ejecutara la funcion finished
            this.finished();

        }, 1000)
    }

}



const myTemporizador: Temporizador = new Temporizador();

// Definimos la función del callback a ejecutar cuando termine el tiempo
myTemporizador.finished = () => {
    console.log("Event finished")
}

// Se inicia el timeout y cuando termine se ejecuta la función finished
myTemporizador.start()


// Eliminar la ejecución de la función
delete myTemporizador.finished;




import {Course} from './models/Course';
import {Student} from './models/Student';
import { COURSES_LIST } from "./mock/courses.mock";


// Creamos un curso

// const cursoTS: Course = new Course("TypeScript", 15)
// const cursoJS: Course = new Course("JavaScript", 23)






// console.log(typeof cursoJS)

// const coursesList: Course[] = [];
// coursesList.push(cursoJS, cursoTS) // add courses in the list

/* Usamos el mock */

const coursesList: Course[] = COURSES_LIST;


// Creamos a student

const johan: Student = new Student("Johan", coursesList, "Grandas")

console.log(johan)


// Conocer horas estudiadas de Johan

console.log(`Johan ha estudiado ${johan.hoursStudied} horas 🎉`)


johan.addDNI = 123456;

// change dni with set method
console.log(johan)


// Saber la instancia de un objeto/variable

//typeof
//instanceof

console.log(typeof johan)

console.log(johan instanceof Student)

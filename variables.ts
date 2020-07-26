// variable declarations 
// FORMAT: let variable: type = value;

let myname: string = "Tomiwa";
let age: number = 10;
let winner: boolean = true;

let sum: number = age + age;

// ARRAY
// FORMAT: let arrayName: type[] = [];
let names: string[] = [];
names.push("John")
names.push("Tomiwa")
names.push("BlackDev")

// TUPLE - is a special structure in TS that can hold as many
// -values as needed
// FORMAT: let tupleName: [type, type, type] = [];
let person: [string, number, boolean] = ["Tobi", 19, true];

// FUNCTIONS

function mySum(a: number, b: number): number {
    return a+b
}

let result: number;
function calc(a: number, b:number): void{
    result = a+b;
}
// optional parameter- to declare a function with optional 
// parameter you use "?"

function speak(name: string, age?:number): string{
    return name.repeat(age);
}
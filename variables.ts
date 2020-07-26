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

// CLASSES
class Person{
    fullname: string;
    constructor(firstname: string, lastname: string){
        this.fullname = firstname + " " + lastname;
    }
    getName(): string {
        return this.fullname
    }
}
let person1 = new Person("Adetomiwa", "Adesanya");

//INTERFACES
// interfaces are just similar to struct in solidity
// FORMAT
/* interface interfaceName{
*    property: type;
*  }
*/
// interfaces define the contract that other classes 
// or objects must comply with if implementing that interface

interface PersonInterface{
    name: string;
    age: number;
    good: boolean;
}

function infor(person: PersonInterface): number{
    return person.age;
}

class Student implements PersonInterface{
    name: string;
    age: number;
    good: boolean;
    constructor(a: string, b: number, c: boolean){
        this.name = a;
        this.age = b;
        this.good = c;
    }
}

// EXAMPLE
interface Panthera {
    roar: string;
}

class Lion implements Panthera {
    roar: string;
    constructor(){
        this.roar = 'roaarrrrr';
    }
}

class Tiger implements Panthera {
    roar: string;
    constructor(){
        this.roar = 'ROAARRRRRRR'
    }
}
//Tiger and Lion implement the panthera interface, which mean
// Tiger and Lion must have a roar property
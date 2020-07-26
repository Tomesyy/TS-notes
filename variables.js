// variable declarations 
// FORMAT: let variable: type = value;
var myname = "Tomiwa";
var age = 10;
var winner = true;
var sum = age + age;
// ARRAY
// FORMAT: let arrayName: type[] = [];
var names = [];
names.push("John");
names.push("Tomiwa");
names.push("BlackDev");
console.log(names);
// TUPLE - is a special structure in TS that can hold as many
// -values as needed
// FORMAT: let tupleName: [type, type, type] = [];
var person = ["Tobi", 19, true];
// FUNCTIONS
function mySum(a, b) {
    return a + b;
}
var result;
function calc(a, b) {
    result = a + b;
}
// optional parameter- to declare a function with optional 
// parameter you use "?"
function speak(name, age) {
    return name + " " + age;
}
// CLASSES
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    Person.prototype.getName = function () {
        return this.fullname;
    };
    return Person;
}());
var person1 = new Person("Adetomiwa", "Adesanya");
function infor(person) {
    return person.age;
}
var Student = /** @class */ (function () {
    function Student(a, b, c) {
        this.name = a;
        this.age = b;
        this.good = c;
    }
    return Student;
}());
var Lion = /** @class */ (function () {
    function Lion() {
        this.roar = 'roaarrrrr';
    }
    return Lion;
}());
var Tiger = /** @class */ (function () {
    function Tiger() {
        this.roar = 'ROAARRRRRRR';
    }
    return Tiger;
}());
//Tiger and Lion implement the panthera interface, which mean
// Tiger and Lion must have a roar property

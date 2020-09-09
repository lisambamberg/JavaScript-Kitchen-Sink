let firstName = "Lisa";
//This is a variable with a value assigned to it

const statesUS = 50;
//This is a constant with a value assigned to it

let sum = 5 + 4;
//This is the sum of the two numbers given

function sayHello() {
    alert("Hello World!");
}
sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let favVegetables = ["broccoli", "carrots", "beets", "radicchio"];
for (let i = 0; i < favVegetables.length; i++) {
    console.log(favVegetables[i]);
}

let pet = {
    name: "Milo",
    breed: "orange tabby"
}
console.log(pet);

let arr = [{ name: "Bob", age: 22 },
{ name: "Sharon", age: 70 },
{ name: "Bart", age: 16 },
{ name: "Sarah", age: 33 },
{ name: "Joe", age: 20 }];
for (let i = 0; i < arr.length; i++) {
    checkAge(arr[i].name, arr[i].age);
}

function getLength(string) {
    return string.length;
}
let result = getLength("Hello World");

if (result % 2 === 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}
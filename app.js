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
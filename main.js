//==========Exercise #1 ===========//
console.log('Answer of first question.')
console.log('===============================\n')
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (property in person3){
    //console.log(property, animal[property]);
    console.log(property, person3[property]);
}


// for (var property of Object.keys(person3)) {
//     console.log(person3[property])
// }
//console.log(Object.values(person3));

//=======Exercise #2=========//
console.log('\n\nAnswer of second question.')
console.log('===============================\n')
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype (Person class)
class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    // Use an arrow to create the printInfo method
    // When I used this.printInfo = () => I got error
    printInfo = () => {
        console.log(`My dog ${this.name} is ${this.age} years old.`);
    };
    // Create another arrow function for the addAge method that takes a single parameter
    addAge = (amount) => {
        this.age += amount // can I write without amount and write this line this.age ++ ?
        console.log(`${this.name} is ${amount} years older now, so she is ${this.age} years old now! I don't like it!`)
    };
}

let zambak = new Person('Zambak', 4);
let lilo = new Person('Lilo',10);

lilo.printInfo();
zambak.printInfo();
console.log('\n')
// Adding to the age 
lilo.addAge(1);
zambak.addAge(3);


// =============Exercise #3 ============//
console.log('\n\nAnswer of third question.')
console.log('===============================\n')
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const promised_func = (word) => {
    return new Promise((resolve, reject) => {
        if (word.length > 10) {
            resolve(word);
        } else {
            reject(word);
        }
    })
}

promised_func('birseybirseyeklebirseyamaneekle')
.then( (result) => {
    console.log("Big word!!!");
}).catch( (result) => {
    console.log("Small Number :| ");
});

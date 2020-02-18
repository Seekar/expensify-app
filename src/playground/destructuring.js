//
//Object destructuring
//

// const person = {
//   name: "Ayoub",
//   age: 25,
//   location: {
//     city: "Casablanca",
//     temp: 20
//   }
// };

// const { name: firstName = "anonymous", age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} in ${city}`);

//
//Array destructuring
//

const adress = ["64 Fath1 Street", "Casablanca", "Morocco", "35335"];

const [, city, country] = adress;

console.log(`you are in ${city} - ${country}`);

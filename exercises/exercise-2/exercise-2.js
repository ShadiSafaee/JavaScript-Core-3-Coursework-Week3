let hogwarts = [{
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];




console.log("-people who belongs to Gryffindor house:")

function peopleOfGryffindorHouse(hogwarts) {
  for (let each in hogwarts) {
    let {
      firstName,
      lastName,
      house,
      pet,
      occupation
    } = hogwarts[each];

    if (house == "Gryffindor") {
      console.log(`${firstName} ${lastName}`);
    }
  }
}
peopleOfGryffindorHouse(hogwarts);

console.log("-people who have pets:")

function peopleOfGryffindorHouse(hogwarts) {
  for (let each in hogwarts) {
    let {
      firstName,
      lastName,
      house,
      pet,
      occupation
    } = hogwarts[each];

    if (pet !== null) {
      console.log(`${firstName} ${lastName}`)
    }
  }
}
peopleOfGryffindorHouse(hogwarts);
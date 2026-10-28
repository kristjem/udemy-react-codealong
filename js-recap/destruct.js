const user = {
  name: "Mike",
  age: 30,
  hobbies: ["electronics repair", "gaming", "music", "jogging"],
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001",
  },
};

const {
  name,
  hobbies: [firstHobby, secondHobby, ...otherHobbies],
  address: { city },
} = user;
console.log(
  `Name: ${name}, First Hobby: ${firstHobby}, Second Hobby: ${secondHobby}, Other Hobbies: ${otherHobbies.join(", ")}, City: ${city}`,
);

name = "Flemming"; // Virker ikke for const-deklarerede variabler, hadde funka for 'let'
console.log(`Updated Name: ${name}`);

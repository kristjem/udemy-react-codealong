// Arrow function example
const add = (a, b) => a + b;
console.log(add(2, 3));

// Template literals
const dude = "John";
const greeting = `Hello, ${dude}!`;
console.log(greeting);

// Ternary operator
const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

// Nullish coalescing operator example
const person = { name: "John", age: 30 }; // Object representing a person with name and age properties
const fruit = null;
console.log(fruit ?? "Nullish: No fruit"); // Checks if fruit is null or undefined, and uses "No fruit" if it is
console.log(fruit || "Logical OR: No fruit"); // Logical OR: uses "No fruit" if fruit is falsy (null, undefined, 0, "", etc.)

console.log(`person.mobile: ${person.mobile ?? "No mobile"}`); // Returns "No mobile" instead of undefined

// Destructuring
// The actual destructuring happens in the next line:
const { name, age: personAge } = person; // Destructuring assignment: extract name and age from person object
console.log(name, personAge); // Output the destructured values

// Spread & Rest operators
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // The ...[] syntax spreads the elements of arr1 into the new array.
console.log(`arr2: ${arr2}`);

const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0); // Rest operator: collect all arguments into an array
// sum is a function we make that, where:
// (...numbers) represents all the arguments passed to the function as an array
// numbers.reduce((acc, curr) => acc + curr, 0) calculates the sum of all numbers in the array
// numbers.reduce((acc, curr) means we are iterating over each number in the array, where acc is the accumulated sum and curr is the current number being processed
// the following  => means the function returns the result of acc + curr for each iteration
// 0 at the end of reduce is the initial value of the accumulated sum (acc)
console.log(`sum: ${sum(1, 2, 3, 4, 5)}`); // Output the sum of all numbers

// More on destructing and rest
const notes = [
  { title: "Meeting Notes", content: "Discuss project updates" },
  { title: "Shopping List", content: "Milk, Bread, Eggs" },
  { title: "Todo", content: "Finish homework" },
  { title: "Workout Plan", content: "Run 5km" },
];
const [firstNote, secondNote, ...restNotes] = notes; // Destructuring assignment with rest operator
console.log(firstNote, secondNote, restNotes); // Output the destructured values
console.log(`secondNote.title: ${secondNote.title}`);

// ARRAY METHODS
const numbers = [1, 2, 3, 4, 5]; // we call each number a banana, just for fun
const doubled = numbers.map((banana) => banana * 2); // map method: create a new array with each element multiplied by 2
// Mapping is different to "reduce" because map creates a new array with transformed elements, while reduce combines elements into a single value
console.log(`doubled: ${doubled}`);

const evenNumbers = numbers.filter((num) => num % 2 === 0); // filter method: create a new array with only even numbers
console.log(`evenNumbers: ${evenNumbers}`);

const total = numbers.reduce((acc, curr) => acc + curr, 0); // reduce method: calculate the sum of all numbers
// Its called "reduce" because it reduces an array to a single value by applying a function to each element and accumulating the result
console.log(`total: ${total}`);

// IMPORTANT
// Optional chaining
const user = { name: "John", address: { city: "New York" } };
const city = user?.address?.city; // Optional chaining: SAFELY access nested properties
const safeBanana = user?.fruitBasket?.banana; // Returns undefined because fruitBasket is missing
console.log(`city: ${city}`);
console.log(`safeBanana: ${safeBanana}`); // Optional chaining safely returns undefined
try {
  const badBanana = user.fruitBasket.banana;
  console.log(`badBanana: ${badBanana}`);
} catch (error) {
  console.log(`Direct access throws: ${error.name}`);
}

// Nullish Coalescing Operator
const bananaCount = user?.fruitBasket?.banana ?? 0; // Nullish coalescing: use 0 if banana is null or undefined
console.log(`bananaCount: ${bananaCount}`);

// Promises & Async/Await
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Hello, world! I'm the promise!" };
      resolve(data);
    }, 1000);
  });
};

const getData = async () => {
  try {
    const result = await fetchData();
    console.log(`Fetched awaited data: ${JSON.stringify(result)}`);
  } catch (error) {
    console.log(`Error fetching awaited data: ${error}`);
  }
};

getData();

// Immutability
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4]; // Create a new array by spreading the original and adding a new element
console.log(`originalArray: ${originalArray}`);
console.log(`newArray: ${newArray}`);
console.log(
  "See? Not mutating the original array. Not even bananas were added.",
);
console.log(
  "And the funny part is that this is logged before the getData() promise resolves.",
);

const eurorackModules = [
  {
    name: "Mutable Instruments Plaits",
    type: "Macro Oscillator",
    price: 199,
    hp: 8,
  },
  {
    name: "Make Noise Maths",
    type: "Function Generator",
    price: 249,
    hp: 20,
  },
  {
    name: "Intellijel Metropolis",
    type: "Sequencer",
    price: 399,
    hp: 14,
  },
  {
    name: "Doepfer A-110",
    type: "Oscillator",
    price: 149,
    hp: 8,
  },
];

const moduleNames = eurorackModules.map((module) => module.name);
console.log(moduleNames);

// index is a zero-based index of the current element in the array
// it is built-in to the map function as the second argument
const moduleTypesNumbered = eurorackModules.map((module, index) => {
  return `${index + 1}. ${module.type}`;
});
console.log(moduleTypesNumbered);

const largeModules = eurorackModules.filter((module) => module.hp > 8);
console.log("Large modules:");
console.log(largeModules);

const smallModules = eurorackModules.filter(
  (module) => !largeModules.includes(module),
);
console.log("Small modules:");
console.log(smallModules);

const totalCharacters = eurorackModules.reduce(
  (total, module) => total + module.name.length,
  0,
);
console.log("Total characters in module names:");
console.log(totalCharacters);

eurorackModules.forEach((module) => {
  console.log(
    `${module.name} is a ${module.type} module with ${module.hp} HP and costs $${module.price}.`,
  );
});

//Temperature in kelvin
const kelvin = 293;
//Convert to Celsius
const celsius = kelvin - 273;
//Convert to Fahrenheit, rounded down
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
// Displays temperature in Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
//Convert to Newton, rounded down
let newton = celsius * (33/100);
newton = Math.floor(newton);
//Displays temperature in Newton
console.log(`The temperature is ${newton} degrees Newton`)
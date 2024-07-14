// Exercise 1: Define an empty array
let foods = []; // Changed to 'let' later
console.log('Exercise 1 result:', foods);

// Exercise 2: Add 'pizza' and 'cheeseburger' to the array
foods.push('pizza');
foods.push('cheeseburger');
console.log('Exercise 2 result:', foods);

// Exercise 3: Insert 'taco' at the beginning
const newFoods = ['taco', ...foods]; 
foods = newFoods;
console.log('Exercise 3 result:', foods);

// Exercise 4: Access an array element
const favFood = foods[1]; 
console.log('Exercise 4 result:', favFood);

// Exercise 5: Insert an element between two others
foods.splice(2, 0, 'tofu'); 
console.log('Exercise 5 result:', foods);

// Exercise 6: Replace elements
const pizzaIndex = foods.indexOf('pizza');
if (pizzaIndex !== -1) {
  foods.splice(pizzaIndex, 1, 'sushi', 'cupcake'); 
}
console.log('Exercise 6 result:', foods);

// Exercise 7: Using the `slice()` method
const yummy = foods.slice(2, 4); 
console.log('Exercise 7 result:', yummy);

// Exercise 8: Finding an index
const soyIdx = foods.indexOf('tofu'); 
console.log('Exercise 8 result:', soyIdx);

// Exercise 9: Joining elements
const allFoods = foods.join(' -> '); // -> is for join
console.log('Exercise 9 result:', allFoods);

// Exercise 10: Check for an element
const hasSoup = foods.includes('soup'); 
console.log('Exercise 10 result:', hasSoup);

// Exercise 11: Odd numbers from an array
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = []; 

nums.forEach(num => {
  if (num % 2 !== 0) { 
    odds.push(num); 
  }
});

console.log('Exercise 11 result:', odds);

// Exercise 12: FizzBuzz with arrays
const fizz = [];      
const buzz = [];      
const fizzbuzz = [];  

nums.forEach(num => {
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num); 
  } else if (num % 3 === 0) {
    fizz.push(num); 
  } else if (num % 5 === 0) {
    buzz.push(num); 
  }
});

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

// Exercise 13: Retrieve the Last Array
const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]
];

const numList = numArrays[numArrays.length - 1]; 
console.log('Exercise 13 result:', numList);

// Exercise 14: Accessing within nested arrays
const num = numArrays[2][1]; 
console.log('Exercise 14 result:', num);

// Exercise 15: Nested array sum
let total = 0; 

numArrays.forEach(innerArray => {
  innerArray.forEach(num => {
    total += num; 
  });
});

console.log('Exercise 15 result:\n', total);



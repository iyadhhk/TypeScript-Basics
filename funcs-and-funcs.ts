// FUNCTIONS THAT TAKE FUNCTION OR CREATE FUNCTIONS

// function parameters
// callback function--------------------------------------
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// function with params
// FUNCTIONS AS TYPES ------------------------------------
// type : function take number and return number
export type MutationFunction = (v: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
  return numbers.map(mutate);
}

export const myNewMutationFunc: MutationFunction = (v: number) => v * 159;

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

// RETURNING FUNCTIONS -----------------------------------
// function type definition
export type Adderfunction = (v: number) => number;

// classic js closure
// typing function that returns another function
// function (take number) return another function that take a number and return addition of the two numbers
export function createAdder(num: number): Adderfunction {
  return (val: number) => num + val;
}

// addOne is a new function that add 1 to any value that comes in
const addOne = createAdder(1);

console.log(addOne(55));

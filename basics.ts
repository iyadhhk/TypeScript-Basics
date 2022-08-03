// every day types

// BASIC TYPES ------------------------------------
// string type
let userName: string = "Jack";
// boolean typee
let hasLoggedIn: boolean = true;

userName += " Harrington";

console.log(hasLoggedIn);

// number type
let myNumber: number = 10;
// Regex type in typescript
let myRegex: RegExp = /foo/;

// TYPING ARRAYS ----------------------------------
// ===>  2 ways of typing arrays: type[], generic type Array<type>

// array of strings type
const names: string[] = userName.split(" ");
// array of numbers using Generic Type
const myValues: Array<number> = [1, 3, 4];

// TYPING OBJECTS ----------------------------------
// type definition of the object
interface Person {
  first: string;
  last: string;
  cool: boolean;
}

const myPerson: Person = {
  first: "Jack",
  last: "Harrington ",
  cool: true,
};

// utility type Record allows us to define the key type and the value type (the default type of key in object is string)
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};
ids[30] = "c";

// TYPING CONDITIONALS & EXPRESSIONS ---------------------
if (ids[30] === "D") {
}
// LOOPS
// i is inferred to number no need to specify i: number
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// typescript resolve v as a number
[1, 2, 3].forEach((v) => console.log(v));
// typescript with return value resolve out as an array of numbers
const out = [4, 5, 6].map((v) => v * 10);
// ts with return value is a string resolve out2 as an array of strings
const out2 = [4, 5, 6].map((v) => `${v * 10}`);
// ts gives us an error because we specified the out3 as array of numbers and the return value is a string
// const out3: number[] = [4, 5, 6].map((v) => `${v * 10}`);

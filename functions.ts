// DEFINING FUNCTIONS -----------------------------
// we specify the type of parameters and the type of what the function returns
// normal function definition
function addNumbers(a: number, b: number): number {
  return a + b;
}
export default addNumbers;

// arrow function definition

// DEFAULT PARAMETERS --------------------------------
// here we show how to use default value with ts variable: type = defaultValue
export const addStrings = (str1: string, str2: string = ""): string => `${str1} ${str2}`;

// UNION TYPES ---------------------------------------
// here we show the union type which means that the variable can be one of two types : string or number
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// VOID FUNCTIONS ------------------------------------
// function that deos not return anything : void
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// PROMISE FUNCTIONS
// we specify that function returns a promise : Promise<string>
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

// REST PARAMETERS
// take multiple arguments and then call the rest of them into an array
export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

// #1 MISCONCEPTION : when ts enforces types
// ==> at compile time not at runtime
// to prove that use this function
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
  //  ==>?. make sure user is defined   , ?? : if you have undefined on the first side of the expression use what's in the other side
}
// we compile this file to js file with npx tsc fileName.ts then we call it in js-functions-tests.js
// if we execute function without arguments js will give us error undefined
// ===> so js do the type checking at the compile time not at run time

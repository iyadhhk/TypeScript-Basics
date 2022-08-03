// FUNCTION OVERLOADING

interface Coordinate {
  x: number;
  y: number;
}
// function that take different type of args and return same result : Coordinate =>> we oveload this function
// definition of the type of functions
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;

// and this is the actual implementation of the function
// unknown = any but you have to cast it  before you use it(check what type it is and how to deal with it) =>> it's kind of safe any ==> which means we know what's gonna be
// arg2? : is optional because one of type def of the function take only one parameter
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };
  // first signature of the function that takes a string
  if (typeof arg1 === "string") {
    // arg1 still unknown so we cast it as a string
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      // the issue here we don't know what "key" is
      // we want it one of "x and y" so we cast it
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  }
  // second signature of the function that takes an obj
  else if (typeof arg1 === "object") {
    coord = {
      // here arg1 still typed as unknown
      // so we need to use ts keyword "as" to cast type
      ...(arg1 as Coordinate),
    };
  }
  // the function take two numerics
  else {
    coord = {
      // arg1 and arg2 still unknown so we cast using "as"
      x: arg1 as number,
      y: arg2 as number,
    };
  }
  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 33 }));
console.log(parseCoordinate("x:12,y:22"));

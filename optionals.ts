// OPTIONAL PARAMETERS
// when defining functions
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  // extra is optional so we need to check for existance
  console.log(`${quantity} ${ingredient} ${extra ? extra : ""}`);
}

printIngredient("1c", "Flour");
printIngredient("1c", "Flour", "somthing more");

// OPTIONAL FIELDS
// when defining objects type

interface User {
  id: string;
  // info is an optional field
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  // here we check the existance of the field
  if (user.info) {
    // using "!" we say that email really exist but there is a better way "getEmailEasy"
    return user.info.email!;
  }
  return "";
}
// easy way to check for info and email
function getEmailEasy(user: User): string {
  // first "?" if "info" exist, second "?" if email exist, "??" means both don't exist we return ""
  return user?.info?.email ?? "";
}

// OPTIONAL CALLBACKS

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  // check if callback exist then invoke it "?."
  callback?.();
}

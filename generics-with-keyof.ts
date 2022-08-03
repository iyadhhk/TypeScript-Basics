//pluck func takes a list of items and grabs a given key from all of those items and returns them as an array
// here we specify that KeyType has to be one of the keys in DataType using "extends keyof "
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "mimi", age: 12 },
  { name: "lg", age: 3 },
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

// exemple 2
interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}
// here Name is : "addToCart" or "checkout" => that's what means "Name extends keyof EventMap"
function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]): void {
  console.log([name, data]);
}

sendEvent("addToCart", { productID: "foo", user: "bbas", quantity: 1, time: 10 });
sendEvent("checkout", { time: 11, user: "bob" });

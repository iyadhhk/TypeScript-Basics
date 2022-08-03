// MAKING A GENERIC FUNCTION
function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}
// with generic type T we get this
// function simpleState<unknown>(initial: unknown): [() => unknown, (v: unknown) => void];
// ts will infer the type of T from the initial value
const [st1getter, st1setter] = simpleState(1);
// function simpleState<number>(initial: number): [() => number, (v: number) => void]

console.log("st1getter ", st1getter());
st1setter(35);
console.log("st1getter ", st1getter());

// OVERRIDING INFERRED GENERIC TYPES
// we need 'T' generic type to be string or null => so we need to override T : the way we do that we use the generic syntax funcName<T> then we give it the type we want to replace 'T'
const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());

// EXEMPLE 2 : RANKER
// Rank is an object type that take a generic type 'RankItem' and set it to item
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

// ranker a function that takes a list of items, and a ranking algorithm called 'rank' = function that takes a value and return a number which is its rank (value's rank)
// the ranker function will return a sorted list of items based on their rank
function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  // here we pass the generic type 'RankItem' to use it in object 'Rank' => ranks will be an array of Rank objects
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

// testing ranker function
interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  { name: "Bulbasaur", hp: 20 },
  { name: "Megasaur", hp: 5 },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);

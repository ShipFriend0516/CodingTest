const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [length, count] = input
    .at(0)
    .split(" ")
    .map((el) => Number(el.trim()));
  const pokemonNameDex = new Map();
  const pokemonIndexDex = new Map();

  const pokemons = input.slice(1, length + 1).map((el) => el.trim());
  pokemons.forEach((pokemon, index) => {
    pokemonNameDex.set(pokemon, index + 1);
    pokemonIndexDex.set(index + 1, pokemon);
  });

  const questions = input.slice(length + 1).map((el) => el.trim());

  questions.forEach((question) => {
    const answer = pokemonNameDex.get(question) ?? pokemonIndexDex.get(Number(question));
    console.log(answer);
  });
};

solution();

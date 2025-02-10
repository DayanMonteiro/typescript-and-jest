type Age = number;

type Person = {
  nome: string;
  idade: Age;
  salario: number;
  corPreferida?: string;
};
type ColorRGB = 'Vermelho' | 'Verde' | 'Azul'; // OR
type ColorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
  idade: 37,
  nome: 'Dayan',
  salario: 20_000,
};

export function setCorPreferida(pessoa: Person, cor: FavoriteColor): Person {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(person, 'Verde'));
console.log(person);

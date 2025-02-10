let x = 10;
x = 0b1010;
const y = 10;
const a = 100;

const person = {
  nome: 'Dayan' as const, // as const é uma assersão
  sobrenome: 'Monteiro',
};

function chooseColor(color: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return color;
}
console.log(chooseColor('Vermelho'), person, x, y);

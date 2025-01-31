/* eslint-disable */

//  inferência de tipos
let name: string = 'Luiz'; // Qualquer tipo de strings: '' "" ``
let age: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; // true ou false
let anySymbol: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ['a', 'b'];
let arrayStrings2: string[] = ['a', 'b'];

// Objetos
let person: { name: string; age: number; adult?: boolean } = {
  age: 37,
  name: 'Dayan',
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;

// Module mode
export default 1;

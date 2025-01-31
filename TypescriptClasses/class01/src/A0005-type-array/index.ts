// Array<T> - T[] generics
export function multiplyArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}
const result = multiplyArgs(1, 2, 3);
console.log(result);

export function concatenateString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const concatenates = concatenateString('a', 'b', 'c');
console.log(concatenates);

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const upper = toUpperCase('a', 'b', 'c');
console.log(upper);

let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

console.log('Pessoa: ', createPerson('Dayan'));

export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoString = squareOf('1');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString * 100);
}

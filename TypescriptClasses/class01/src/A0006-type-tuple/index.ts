// Tuple
const dataClient1: readonly [number, string] = [1, 'Dayan'];
const dataClient2: [number, string, string] = [1, 'Danilo', 'Monteiro'];
const dataClient3: [number, string, string?] = [1, 'Laryssa'];
const dataClient4: [number, string, ...string[]] = [1, 'Gabirel', 'Viana'];

console.log(dataClient1);
console.log(dataClient2);
console.log(dataClient3);
console.log(dataClient4);

// readonly array
const array1: readonly string[] = ['Julio', 'César'];
const array2: ReadonlyArray<string> = ['Dayan', 'Monteiro'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;

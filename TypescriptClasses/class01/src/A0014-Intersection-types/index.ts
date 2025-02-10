type HasName = { nome: string };
type HasLastName = { sobrenome: string };
type HasAge = { idade: number };
type Person = HasName & HasLastName & HasAge; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;

const person: Person = {
  nome: 'Dayan',
  sobrenome: 'Monteiro',
  idade: 30,
};

console.log(person);

// Module mode
export { person };

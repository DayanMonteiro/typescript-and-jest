const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown; // index signature
} = {
  keyA: 'Valor A',
  keyB: 'Valor B',
};

objectA.keyB = 'Outro valor';
objectA.keyC = 'Novo valor';
objectA.keyD = 'Nova chave';

console.log(objectA);

// Module mode
export default 1;

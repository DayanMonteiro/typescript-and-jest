// o tipo never lança um erro
export function createErro(): never {
  throw new Error('Erro qualquer');
}

createErro();

// Module mode
export default 1;

/* O enum no TypeScript é usado para definir um conjunto de valores nomeados que representam um grupo de
constantes relacionadas. Ele ajuda a tornar o código mais legível e organizado, especialmente quando
lidamos com conjuntos fixos de valores. */

enum Colors {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

enum Colors {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

export function chooseColor(cor: Colors): void {
  console.log(Colors[cor]);
}

chooseColor(Colors.ROXO);

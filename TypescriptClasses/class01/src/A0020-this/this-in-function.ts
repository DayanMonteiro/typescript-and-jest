export function funcao(this: Date, nome: string, age: number): void {
  console.log(this);
  console.log(nome, age);
}

funcao.call(new Date(), 'Dayan', 37);
funcao.apply(new Date(), ['Dayan', 37]);

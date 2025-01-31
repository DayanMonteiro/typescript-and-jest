function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Dayan',
  lastName: 'Monteiro',

  returnName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

noReturn('Dayan', 'Monteiro dos Santos');
person.returnName();

export { person };

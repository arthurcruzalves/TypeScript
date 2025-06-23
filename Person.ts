interface Person{
    nome:string;
    idade:number;
    email:string;
}

const pessoa: Person={
    nome: "Clara Alves",
    email: "cla.alves@gmail.com",
    idade: 19
}
console.log(pessoa);
console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
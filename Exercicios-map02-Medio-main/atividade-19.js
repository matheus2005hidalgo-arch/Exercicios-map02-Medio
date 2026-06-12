const dados = [
  { id: 1, nome: "Joao", idade: 35 },
  { id: 2, nome: "Maria", idade: 22 }
];

const simples = dados.map(({ id, nome }) => ({ id, nome }))

console.log(simples)

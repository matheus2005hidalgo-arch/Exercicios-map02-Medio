const pessoas = [
  { nome: "Joao", idade: 18 },
  { nome: "Luiz", idade: 20 },
  { nome: "Pedro", idade: 16 }
]

const verificacaoIdade = pessoas.map(pessoa => pessoa.idade < 18 ? "Menor de idade" : "Maior de idade")

console.log(verificacaoIdade)

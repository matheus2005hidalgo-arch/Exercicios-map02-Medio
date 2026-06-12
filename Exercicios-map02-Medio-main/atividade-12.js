const produtos = [
  { nome: "Casaco", preco: 250 },
  { nome: "Tenis", preco: 200 },
  { nome: "Bermuda", preco: 70 }
];

const texto = produtos.map(produto => `Produto: ${produto.nome} | Valor: R$ ${produto.preco}`)

console.log(texto)

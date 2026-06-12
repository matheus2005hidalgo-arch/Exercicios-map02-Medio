const produtos = [
  { nome: "Camisa", preco: 100 },
  { nome: "Tenis", preco: 250 },
  { nome: "Casaco", preco: 300 }
]
const comDesconto = produtos.map(produto => ({
  ...produto,
  preco: produto.preco * 0.9
}));

console.log(comDesconto);

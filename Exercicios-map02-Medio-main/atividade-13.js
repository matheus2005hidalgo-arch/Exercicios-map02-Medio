function exibirUsuario({ nome, email }) {
  return `${nome} - ${email}`;
}
const usuario = { nome: "Luiz", email: "luizinsantista@gmail.com" }

console.log(exibirUsuario(usuario))

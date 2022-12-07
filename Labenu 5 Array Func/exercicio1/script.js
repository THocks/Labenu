const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

const upperCase = (objeto) => {
  for (i in objeto) {
    objeto[i] = objeto[i].toUpperCase();
  }
  return objeto;
};

const textoCorrido = (objeto) => {
  return `${objeto.nome} ${objeto.profissao} ${objeto.username} ${objeto.senha}`;
};

console.log(textoCorrido(objeto));


const imprimir( objeto,callback) =>{
    const novoObjeto = callback(objeto)
    return novoObjeto
}

console.log(imprimir(objeto, capsLock))
console.log(imprimir(objeto,textoCorrido))
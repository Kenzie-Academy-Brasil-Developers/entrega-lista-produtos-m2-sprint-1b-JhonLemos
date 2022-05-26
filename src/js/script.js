function somarProdutos(listaProdutos) {
  const paragrafoPreco = document.querySelector(".containerPrecoTotal");
  paragrafoPreco.innerHTML = "";
  const soma = listaProdutos.reduce((x, y) => x + y.preco, 0);

  const paragrafo = document.createElement("p");
  const spanPreco = document.createElement("span");
  paragrafo.innerText = "Valor total dos produtos da sessão selecionada";
  spanPreco.innerHTML = `R$ ${soma},00`;

  paragrafoPreco.append(paragrafo, spanPreco);
}

function montarListaProdutos(listaProdutos) {
  const ul = document.querySelector(".containerListaProdutos ul");
  ul.innerHTML = "";

  listaProdutos.forEach((produto) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const span = document.createElement("span");

    img.src = produto.img;
    img.alt = produto.nome;
    h3.innerText = produto.nome;
    p.innerText = `R$${produto.preco},00`;
    span.innerHTML = produto.secao;

    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(span);
    li.appendChild(p);

    ul.appendChild(li);
  });
}
montarListaProdutos(produtos);
somarProdutos(produtos);

const botaoMostrarHortifruti = document.querySelector(
  ".estiloGeralBotoes--filtrarHortifruti",
);
botaoMostrarHortifruti.addEventListener("click", filtrarHortifruti);

function filtrarHortifruti() {
  const listaHortifruti = produtos.filter((produto) => {
    return produto.secao === "Hortifruti";
  });
  montarListaProdutos(listaHortifruti);
  somarProdutos(listaHortifruti);
}

const botaoMostrarPanificadora = document.querySelector("#panificadora");
botaoMostrarPanificadora.addEventListener("click", filtrarPanificadora);

function filtrarPanificadora() {
  const listaPanificadora = produtos.filter((produto) => {
    return produto.secao === "Panificadora";
  });
  montarListaProdutos(listaPanificadora);
  somarProdutos(listaPanificadora);
}

const botaoMostrarLaticinio = document.querySelector("#laticinios");
botaoMostrarLaticinio.addEventListener("click", filtrarLaticinio);

function filtrarLaticinio() {
  const listaLaticinio = produtos.filter((produto) => {
    return produto.secao === "Laticínio";
  });
  montarListaProdutos(listaLaticinio);
  somarProdutos(listaLaticinio);
}

const botaoMostrarTodos = document.querySelector(
  ".estiloGeralBotoes--mostrarTodos",
);
botaoMostrarTodos.addEventListener("click", mostrarTodos);

function mostrarTodos() {
  montarListaProdutos(produtos);
  somarProdutos(produtos);
}

const botao_de_buscar = document.querySelector(
  ".botaoBuscaPorNome",
);
const input = document.querySelector(".campoBuscaPorNome");
botao_de_buscar.addEventListener("click", pesquisarProdutos);

function pesquisarProdutos() {
  const produtoPesquisa = produtos.filter((produto) =>
    produto.nome.toLocaleLowerCase().includes(input.value.toLocaleLowerCase()),
  );

  montarListaProdutos(produtoPesquisa);
  somarProdutos(produtoPesquisa);
}

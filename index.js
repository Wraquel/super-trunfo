var carta1 = {
  nome: "Bulbasauro",
  imagem:
    "https://www.seekpng.com/png/detail/99-991786_vector-by-dashiesparkle-d-clip-freeuse-library-bulbasaur.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6,
  },
};
var carta2 = {
  nome: "Darth Vader",
  imagem:
    "https://www.artmajeur.com/medias/standard/c/l/clementereira/artwork/12390863_img-20180724-200514.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2,
  },
};
var carta3 = {
  nome: "Shiryu de Dragão",
  imagem:
    "https://i.pinimg.com/originals/93/52/73/935273e1e16f07911849c145812e3ce4.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10,
  },
};
var cartas = [carta1, carta2, carta3];
var cartaJogador;
var cartaMaquina;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesText = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesText +=
      "<input type='radio' name ='atributo' value ='" +
      atributo +
      "'>" +
      atributo;
    opcoes.innerHTML = opcoesText;
  }
}

function obtemAtributoSelecionado() {
  var atributoEscolhido = document.getElementsByName("atributo");
  for (i = 0; i < atributoEscolhido.length; i++) {
    if (atributoEscolhido[i].checked == true) {
      return atributoEscolhido[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu!";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu!";
  } else elementoResultado.innerHTML = "Empatou!";
  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage= "url("+cartaJogador.imagem+")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesText = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesText +=
      "<input type='radio' name ='atributo' value ='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesText + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage= "url("+cartaJogador.imagem+")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesText = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesText +=
      "<p type='text' name ='atributo' value ='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`;
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesText + "</div>";
}

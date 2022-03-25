// SELEÇÃO DE ELEMENTOS
// getElementById - seleciona pelo id, retorn null quando não existe
// classe e tag - getElementByClassName e getElementByTagName - retornam uma lista
// seletor geral unico - querySelector retorna o primeiro elemento que combinar com o seu seletor css
// querySelectorAll - seletor geral lista, retorna todos os elementos compatíveis com o seletor css em uma nodelist, a lista é estastica

//HTMLCollection vs NodeList
//diferença está nos metodos e propriedades, NodeList tem mais métodos. Html é ao vivo, e node é estatico


// const animais = document.getElementById('animais');

// const primeiraUl = document.querySelector('ul');


// forEach -> MediaStreamAudioDestinationNode, seleciona uma lista de itens do dom
// parametros do forEach -> primeiro parametro é o callback, ou seja, a função que vai ser ativada a cada item. essa função pode receber tres parametros: valorAtual, index (posição do index no array) e array
// const imgs = document.querySelectorAll('img');
// imgs.forEach(function(item, index, array) {
//   console.log(item, index, array)
// });

// é um metodo d array, alguns objetos array-like possuem este método. caso não possua, o ideal é transformá-los em uma array
// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos);

// titulosArray.forEach(function(item) {
//   console.log(item);
// })

//ARROW FUNCTION
// sintaxe curta em relação a function expression. basta remover a palavra chave function e adicionar a fat arrow -> após os argumemtos.
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item) => {
//   console.log(item);
// })

// apenas um argumento não precisa de parenteses 
// imgs.forEach(item => {
//   console.log(item);
// })

// se não tiver nenhum argumento, precisa passar os parenteses
// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// })

//quando só tem uma linha de codigo não precisa das chaves
// let i = 0;
// imgs.forEach((item) => console.log(i++));

// //CLASSES E ATRIBUTOS
// //classList -> retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
// menu.classList.add('ativo', 'teste');

// if(menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul')
// }else {
//   menu.classList.add('nao-possui-azul')
// }

// //attibutes -> retorna um array-like com os atributos do elemento.
// const animais = document.querySelector('animais');
// console.log(animais.attributes[2]);

// const img = document.querySelector('img');
// img.setAttribute('alt', 'é uma raposa')


// // EVENTOS 1 e 2 
// //addEventListener -> adiciona uma função ao elemento, esta chamada de callback(uma função que dispara caso algo ocorra, ou seja, o evento), que será ativada assim que certo evento ocorrer neste elemento.
// const img = document.querySelector('img');
// //elemento.addEventListener(event,callback, options) -> terceiro parametro é opcio
// img.addEventListener('click', function() {
//   console.log('Clicou');
// })
// // callback -> boa pratica separdar a função de callback do addEventListener, ou seja, declarar uma funcão ao invès de passsar diretamente uma funcção anonima.
// const img = document.querySelector('img');
// function callback() {
//   console.log('clicou');
// }
// img.addEventListener('click', callback);
// // event -> o primeiro evento do callback é referente ao evento que ocorreu
// // propriedades do event -> event.currentTarget: this (onde cliquei, pode ser que seja o mesmo resultado do target), event.target: onde o clique ocorreu exatamente, event.type: tipo de evento, etc
// //event.preventDefault() -> previne o comportamneto padrão do evento browser. Ex: um link externo, previne que ele seja aberto e faz o que voce deseja com ele
// // a palavra chave this é uma palavra que pode fazer referencia a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referencia ao elemento em que addEventListenter foi adicionar. Geralmente igual ao event.currentTarget
// // diferentes eventos, que podem ser adicionado ao elemento, window ou document

// const h1 = document.querySelector('h1');

// function handleEvent(event) {
//   console.log(event.type, event)
// }

// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);

// //event Keyboard -> você pode adicionar atalhos para facilitar a navegação no seu site, atraves de eventos do keyboard
// function handleKeyabord(event) {
//   if(event.key === 'f') {
//     document.body.classList.toggle('fullscreen');
//   }
// }

// window.addEventListener('keydown', handleKeyabord);

// //forEach e eventos -> o método addEventListener é adicionada à um unico elemento, então é necessario um loop entre elementos de uma lista, para adicionarmos à cada um deles.
// const imgs = document.querySelectorAll('img');

// function imgSrc(event) {
//   const src = event.currentTarget.getAttribute('src');
//   console.log(src);
// }

// imgs.forEach((img) => {
//   img.addEventListener('click', imgSrc);
// });

//TRANSVERSING E MANIPULAÇÃO 1
//outerHTML, innerHTML e innerText
//propriedades que retornam uma string contendo o html ou texto. é possivel atribuir um novo valor parar as mesmas.
//outerHTML = traz todo o html do elemento incluindo ele mesmo
//innerHTML = html interno completo
//innerText = texto, sem tags

//Transversing -> como navegar pelo DOM, utilizando suas propriedades e métodos
//lista.children[--lista.children.length]; -> ultimo filho
//lista.querySelector('li:last-child');

//ELEMENT vs NODE
//element é um tipo de node, são as tags html. Já o node pode ser qualquer coisa: texto, comentário. Geralmente estamos atras de um elemento e não de qualquer node em si.

//MANIPULANDO ELEMENTOS
//é possivel mover elementos no dom com métodos de Node

// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo'); -> selecionando o titulo de contato 
// lista.appenChild(titulo); -> move para o final 
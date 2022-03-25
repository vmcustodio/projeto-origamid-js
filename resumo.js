//***************--------------OBJETOS--------------------*******************
//-------------------------- FUNÇÃO CONSTRUTORA -----------------------------
// criar um objeto, basta definir a variavel e iniciar o seu valor com {}
// e se precisarmos criar um novo objeto com as mesmas caracteristicas do anterior?

// const carro = {
//   marca: 'Marca',
//   preco: 0,
// }

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 4000;

// const fiat = carro;
// fiat.marca = 'Fiat';
// fiat.preco = 3000;
 
//carro, fiat e honda apontam para o mesmo objeto, ou seja, está modificando ele, no final o console.log(carro) será fiat e 3000

//Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.
// =>>>>
// function Carro() {
//   this.marca = 'Marca'; -> this é simplemente o objeto carro
//   this.preco = 0;
// }

// const honda = new Carro();
// honda.marca = 'Honda';
// honda.preco = 4000;
// const fiat = new Carro();
// fiat.marca = 'Fiat';
// fiat.preco = 3000;


//exemplo:
// function Carro(marcaAtribuida, precoAtribuido){
//   this.marca = marcaAtribuida;
//   this.preco = precoAtribuido;
// }
// const honda = new Carro('Honda' , 3000);

//this faz referencia ao próprio objeto construido com a função construtora

// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

// =>>>
// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
//   this.andar = function() {
//     console.log(this.nome + ' Andou');
//   }
// }

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
// =>>>
// const joao = new Pessoa('João', 20);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
// ===> 
// function Dom(seletor) {
//   const elementList = document.querySelectorAll(seletor);
//   this.elements = elementList;
//   this.addClass = function(classe) {
//     elementList.forEach((element) => {
//       element.classList.add(classe);
//     })
//   }
// }
// this.removeClass = function(classe){
//   elementList.forEach((element) => {
//     element.classList.remove(classe);
//   })
// }

// const listaItens = new Dom('li');
// const ul = new Dom('ul');
// listaItens.addClass('ativar')


//**************************Prototype**********************
// métodos de outros objetos e que nunca criamos, só existem por conta dos prototypes
//prototipo é uma propriedade das funções
// pessoa.prototype.andar = function() { return this.nome }
//A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
// é possivel adicionar novas propriedades e métodos ao objeto prototype
//não falar com o __proto__ diretamente. => andre.__proto__.andar();

//CONSTRUTORES NATIVOS
//const cidade  =  new String('Rio'); => esse construtor possui um prototipo com propriedades e métodosm que poderão ser acessadas pelo tipo de DOMRectReadOnly.


// MÉTODO DO OBJETO VS PROTÓTIPO
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.


// ******************* DIFERENTES TIPOS DE OBJETO -> NATIVE, HOST E USER ***************
// native => Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host. OU SEJA, Object, String, Array são nativos ou seja em qualquer browser irá existir 
// host => Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.OU SEJA, um objeto do browser
// user=> Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa. OU SEJA objetos do usuario, que você cria. 
// babel =>  transpila para virar um código antigo

// bibliotecas => Bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas, torna as mesmas obsoletas.

// API => Application Programming Interface, é uma interface de software criada para a interação com outros softwares. Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser. => tem o programa de computador que atraves de texto vai conseguir fazer as atividades com o browser. Sempre que estiver utilizando um método do browser na verdade está usando a api do browser. ex: console.log()

// exercicios native, host, user 
// liste 5 objetos nativos => Object, String, Array, Functio, Number
// liste 5 objetos do browser => Window, history, Document, HTMLCollection, NodeList

// ******************** STRING ***********************
// métodos e propriedades do construtor de Strings
//É a construtora de strings, toda string possui as propriedades e métodos do prototype de String. Quando cria uma string => const comida = 'pizza' -> a pizza tem todos os metódos igual como se fosse criar => const liquido = new String('Agua'); => sendo que o segundo retorna um objeto e o primeiro retorna direto uma string, com os métodos sendo os mesmos.
// propriedades =>
// length: total de caracteres, podendo passar comida[0] // P
//métodos
//comida.charAt(n) : retorna o caracter de acordo com o index de (n).
//str.concat(str2, str3) : concatena as strings e retorna o resultado.
//str.includes(search, position) : procura pela string exata dentro de outra string. A procura é case sensitive.  Exemplo:  listaFrutas.includes(fruta); //retorna true pq na lista existe 'Banana'
//str.endswith(search) e str.startswith(search) : procura pela string exata dentro de outra string. A procura é case sensitive. exemplo => fruta.endsWith('nana); retorna true
//str.slice(start, end): corta a string de acordo com os valores de start e end. Exemplo: transacao1.slice(0,3) retorna Dep pois a string era 'Depósito'
//str.substring(start,end): Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.
//str.indexof(search) e str.lastindexof(search) : Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado. Exemplo: fruta.indexOf('b') retorna //0
//str.padstart(n,str) e str.padend(n,str): Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento. Exemplo: listaPrecos[0].padStart(10, '.'); retorna .....R$ 99
//str.repeat : repete a string (n) vezes. const frase = 'a' -> frase.repeat(5) retorna aaaaa
//str.replace(regexp|substr, newstr|function) : Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar. Exemplo: preço.replace(',','.')
//str.split(padrao) :  Divide a string de acordo com o padrão passado e retorna uma array
//srt.toLowerCase() w str.toUpperCase() : Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

// *******************NUMBER E MATH ****************************
// É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.
// const ano = 2019; const preco = new Number(99);
//métodos =>
//number.isNan() e number.isInteger() : isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral. Verifica se o valor é true ou false.
//number.parseFloat() e number.parseInt() : parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.
//n.toFixed() : arredonda o numero com base no total de casas decimais do argumento.
//n.toString(radix) : transforma o numero em uma string com base no radix. Use o 10 para o sistema decimal.
//n.toLocaleString(lang, options) : formata o numero de acrodo com a lingua e opções passadas.
//math => , não é um construtor, é um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.
// Exemplo: math.PI retorna 3.1415


//*****************Array **************************************
//Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.
// Construção de arrays: Toda array herda os métodos e propriedades do protótipo do construtor Array.
// array.length => propriedade que retorna o tamanho do array
//array.from() : método utilizado para transformar array-like objects, em uma array
// array.isArray() : verifica se o valor passado é uma array e retorna um valor booleano.
// array.of(), array() e new array() : Verifica se o valor passado é uma array e retorna um valor booleano. A palavra chave new não é necessária para utilizar o construtor Array.
//Exemplo : Array.of(20) retorna [20] um array com o numero 20 e não com 20 itens
// propriedades e métodos do prototype -> 
// [].length : retorna o tamanho do array
// métodos modificadores ==> retornam um valor e modificam o array original
// [].sort() : organiza o array pelo unicode
//[].unshift() e [].push() : o primeiro adiciona elementos ao inicio do array e retorna o length enquanto o segundo adiciona elemento ao final da array e retorna o length da mesma.
// [].shift() e [].pop() : o primeiro remove o primeiro elemento do array e retorna o mesmo. já o segundo remove o ultimo elemento da array e retorna o mesmo.
//[].reverse() : inverte os itens da array e retorna a nova array
//[].splice() : adiciona valores na array a partir do index. remove a quantidade de itens que for passada no segundo parametro. Exemplo : carros.splice(3,2, 'Ferrari');
//copyWithin() : a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. caso omita os valores de inicio e final, ele irá utilizar como inicio o 0 e final e valor total da array.
// [].fill() : preenche a array com o valor, do inicio até o fim.
// métodos de acesso ====>
// [].concat() : irá concatenar a array com o valor passado.
//[].includes() : verifica se a array possui o valor que vc passou e retorna true ou false
//[].indexOf() : verifica se a array possui o valor e retorna o index do primeiro valor na array
// [].lastIndexOf() : retorna o index do ultimo
// [].join(separador) : junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parametro, este será utilizado durante a junção de cada item da array.
// [].slice(inicio, final) : retorna os itens da array começando pelo inicio e indo até o valor de final.

//********************OBJETOS *************************** */
// métodos que fazem um loop por cada item do arrat, ou seja, interagem com cada item
// [].forEach(callback(itemAtual, index, array)) => função de callback é executada ára cada item da array. os argumentos sendo -> valor do item da array, index do valor na array, array original.
// [].map(callback(itemAtual, index, array)) => funciona da mesma forma que o anterior poré retorna uma nova array com valores atualizados de acordo com o return de cada iteração.
// Valor retorndo: se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.
// se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e vc pode iterar novamente sobre estes valores.
//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial): executa a função de callback para cada item da array. retorna um valor.


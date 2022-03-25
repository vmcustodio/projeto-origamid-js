export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom, com numero em seu texto
  // Incrementa a partir de 0 até o numero final
  static incremetarNumero(numero) {
    const total = +numero.innerText; // transformando em numero a string q foi 'pega' noinnerText
    // eslint-disable-next-line max-len
    const incremento = Math.floor(total / 100); /* incremento sendo relativo ao numero para não demorar tanto pra chegar ao valor final */
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        // eslint-disable-next-line max-len
        numero.innerText = total; /* quando passa do total, ele volta , mantendo sempre o maximo como total */
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar numero para cada numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incremetarNumero(numero));
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect(); /* quando ocorrer a animação para de observar */
      this.animaNumeros();
    }
  }

  // adiciona o mutationObserver para verificar quando a classe ativo é adicionada ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    // eslint-disable-next-line max-len
    this.observer.observe(this.observerTarget, { attributes: true }); /* irá observar os atributos */
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}

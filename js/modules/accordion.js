// NAVEGAÇÃO POR ACCONDION LIST -> onde a resposta da pergunta está escondida
export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    // eslint-disable-next-line max-len
    item.nextElementSibling.classList.toggle(this.activeClass); // faz referencia ao item que está sendo clicado no momento
  }

  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.accordionList.length) {
      // eslint-disable-next-line max-len
      this.toggleAccordion(this.accordionList[0]); // passando o primeiro item para que já seja ativado e abra a resposta
      this.addAccordionEvent();
    }
  }
}

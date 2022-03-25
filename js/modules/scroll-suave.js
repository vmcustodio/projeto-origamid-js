// SCROLL SUAVE LINK INTERNO
export default class ScrollSuave {
  constructor(links, options) { // pessoa irá selecionar quais serão os links internos
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    // eslint-disable-next-line max-len
    this.scrollToSection = this.scrollToSection.bind(this); // com o bind consegue definir qual vai ser this dessa função
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth';
    // });
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => { // essa função serve para adicionar os eventos
      link.addEventListener('click', this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) { // ativando apenas se o houver links passados
      this.addLinkEvent();
    }
    // eslint-disable-next-line max-len
    return this; // pq assim no script poderia linkar direto outras propriedades do objeto sem dar undefined
  }
}

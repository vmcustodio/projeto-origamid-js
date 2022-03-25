// ANIMAÇÃO AO SCROLL
import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6; // quando irá ocorrer a animaçao

    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  // Pega a distancia de cada item em relação ao topo o site
  getDistance() {
    // realizando a desestrturação da nodelist
    // para poder usar o .map que é apenas utilizado em arrays
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distancia em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      // aqui o this.animaScroll é callback, sendo necessario fazer o bind
      // pois se não o this dentro do callback fará referencia ao window
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}

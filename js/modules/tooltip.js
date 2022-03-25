export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip com base em seus estilos de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`; // template string
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave(event) {
    this.tooltipBox.remove(event.currentTarget);
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave); // para tirar o evento
    event.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria o tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div'); // criando div para a tooltip
    const text = element.getAttribute('aria-label'); // puxa o texto da onde passou o mouse por cima para ser exibido
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text; // texto que foi puxado do ariaLabel
    document.body.appendChild(tooltipBox); // adicionar a tooltip no final do documento no body
    this.tooltipBox = tooltipBox;
  }

  // cria a tooltip e adiciona os eventos de mousemove e mouseleave ao target
  onMouseOver(event) {
    // cria a tooltip box e coloca em uma propriedade
    this.criarTooltipBox(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave); // para remover a tooltip
  }

  // adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => { // adicionando para cada tooltip
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}

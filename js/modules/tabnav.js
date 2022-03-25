// NAVEGAÇÃO POR TABS
export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu); // sendo selecionado pela classe
    this.tabContent = document.querySelectorAll(content); // sendo selecionado pelo dataset
    this.activeClass = 'ativo';
  }

  // ativa a tab de acordo com o index da mesma (urso, esquilo etc)
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item :
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}

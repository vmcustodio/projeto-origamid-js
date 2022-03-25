export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }
  // const agora = new Date();

  // const futuro = newDate('Dec 24 2018 23:59');

  // function transformarEmDias(tempo) {
  //   return tempo / ( 24 * 60 * 60 * 100);
  // }

  // const diasAgora = transformarEmDias(agora.getTime());
  // const diasFuturo = transformarEmDias(futuro.getTime());

  dadosFuncionamento() {
    this.diaSemana = this.funcionamento.dataset.semana.split(',').map(Number); /* split retorna o array, e passando o number para map para ja retornar um numero */
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diaSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0]
       && this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

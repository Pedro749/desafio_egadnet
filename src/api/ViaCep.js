import axios from 'axios';

class ViacCep {
  constructor() {
    this.URL = 'https://viacep.com.br/ws/';
    this.cep = '';
    this.returnFormat = 'json';
  }

  setCep(cep) {
    this.cep = cep;
  }

  async fetchApiData() {
    this.checkCep();

    const response = await axios.get(this.getCompleteURL());
    const { data } = response;

    return data;
  }

  checkCep() {
    if (this.cep.length === 0) {
      throw new Error('CEP is empty');
    }
  }

  getCompleteURL() {
    return `${this.URL}/${this.cep}/${this.returnFormat}`;
  }
}

export default ViacCep;

import ViacCep from '../api/ViaCep';
import AppError from '../errors/AppError';

class CepService {
  #body = null;

  #cep = null;

  constructor(requestBody) {
    this.#body = requestBody;
    this.#cep = '';
  }

  async fetch() {
    this.#validParams();
    const viaCep = new ViacCep();
    viaCep.setCep(this.#cep);

    const data = await viaCep.fetchApiData();
    return this.#treatsNotFound(data);
  }

  #validParams() {
    if (!this.#body.cep) {
      throw new AppError('Param cep not found!');
    }

    if (!this.#isValidCep()) {
      throw new AppError('Invalid cep!');
    }
  }

  #isValidCep() {
    this.#cep = this.#body.cep.replace(/\D/g, '');

    if (this.#cep.length !== 8) {
      return false;
    }

    return true;
  }

  #treatsNotFound(cep) {
    if (cep.erro) {
      return {
        message: 'CEP not found!',
      };
    }

    return cep;
  }
}

export default CepService;

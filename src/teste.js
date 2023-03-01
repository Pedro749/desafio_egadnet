import ViacCep from './api/ViaCep';

const viaCep = new ViacCep();
viaCep.setCep('77440320');

(async () => {
  try {
    const retorno = await viaCep.fetchApiData();
    console.log(retorno);
  } catch (error) {
    console.log(error.message);
  }
})();

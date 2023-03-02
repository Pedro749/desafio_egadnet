import CepService from '../services/CepService';

class CepController {
  async getData(request, response) {
    const cepService = new CepService(request.body);
    const data = await cepService.fetch();

    return response.json(data);
  }
}

export default new CepController();

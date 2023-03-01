import CepService from '../services/CepService';

class CepController {
  async getData(request, response) {
    try {
      const cepService = new CepService(request.body);
      const data = await cepService.fetch();

      return response.json(data);
    } catch (error) {
      response.status(400);
      return response.json({ Error: [error.message] });
    }
  }
}

export default new CepController();

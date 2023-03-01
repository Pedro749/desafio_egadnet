import TokenService from '../services/TokenService';

class TokenController {
  create(request, response) {
    try {
      const tokenService = new TokenService(request.body);
      const data = tokenService.create();

      return response.json(data);
    } catch (error) {
      response.status(400);

      return response.json({ Error: [error.message] });
    }
  }
}

export default new TokenController();

import TokenService from '../services/TokenService';

class TokenController {
  create(request, response) {
    const tokenService = new TokenService(request.body);
    const data = tokenService.create();

    return response.json(data);
  }
}

export default new TokenController();

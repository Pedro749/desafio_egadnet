class HomeController {
  async index(request, response) {
    return response.json('Welcome to Egadnet Chalenge!');
  }
}

export default new HomeController();

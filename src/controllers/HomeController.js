class HomeController {
  async index(request, response) {
    response.json('Welcome to Egadnet Chalenge!');
  }
}

export default new HomeController();

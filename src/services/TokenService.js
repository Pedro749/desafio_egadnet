import jwt from 'jsonwebtoken';

class TokenService {
  constructor(requestBody) {
    this.body = requestBody;
  }

  create() {
    this.validParams();

    const { email } = this.body;

    const token = jwt.sign({ email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return { token, expiresIn: process.env.TOKEN_EXPIRATION };
  }

  validParams() {
    if (!this.body.email) {
      throw new Error('Param email not found!');
    }

    if (!this.isValidEmail()) {
      throw new Error('Invalid email!');
    }
  }

  isValidEmail() {
    // eslint-disable-next-line no-useless-escape
    const REGEX_EMAIL_VAIDATION = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

    if (!REGEX_EMAIL_VAIDATION.test(this.body.email)) {
      return false;
    }

    return true;
  }
}

export default TokenService;

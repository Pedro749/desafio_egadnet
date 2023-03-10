import jwt from 'jsonwebtoken';
import tokenConfig from '../config/tokenConfig';
import AppError from '../errors/AppError';

class TokenService {
  #body = null;

  constructor(requestBody) {
    this.#body = requestBody;
  }

  create() {
    this.#validParams();
    const { email } = this.#body;

    const token = jwt.sign({ email }, tokenConfig.TOKEN_SECRET, {
      expiresIn: tokenConfig.TOKEN_EXPIRATION,
    });

    return { token, expiresIn: tokenConfig.TOKEN_EXPIRATION };
  }

  #validParams() {
    if (!this.#body.email) {
      throw new AppError('Param email not found!');
    }

    if (!this.#isValidEmail()) {
      throw new AppError('Invalid email!');
    }
  }

  #isValidEmail() {
    // eslint-disable-next-line no-useless-escape
    const REGEX_EMAIL_VAIDATION = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

    if (!REGEX_EMAIL_VAIDATION.test(this.#body.email)) {
      return false;
    }

    return true;
  }
}

export default TokenService;

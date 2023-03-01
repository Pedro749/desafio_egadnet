import { verify } from 'jsonwebtoken';
import tokenConfig from '../config/tokenConfig';

export default async (request, response, next) => {
  try {
    const { authorization } = request.headers;

    if (!authorization) {
      throw new Error('Token is required!');
    }

    const [, token] = authorization.split(' ');

    verify(token, tokenConfig.TOKEN_SECRET);

    return next();
  } catch (erro) {
    response.status(401);

    return response.json({ Error: [erro.message] });
  }
};

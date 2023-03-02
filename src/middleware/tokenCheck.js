import { verify } from 'jsonwebtoken';
import tokenConfig from '../config/tokenConfig';
import AppError from '../errors/AppError';

export default async (request, response, next) => {
  const { authorization } = request.headers;

  if (!request.headers.authorization) {
    throw new AppError('Token is required!', 401);
  }

  const [, token] = authorization.split(' ');

  try {
    verify(token, tokenConfig.TOKEN_SECRET);

    return next();
  } catch (erro) {
    throw new AppError('Invalid Token', 401);
  }
};

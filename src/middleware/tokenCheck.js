import { verify } from 'jsonwebtoken';

export default async (request, response, next) => {
  try {
    const { authorization } = request.headers;

    if (!authorization) {
      throw new Error('Token is required!');
    }

    const [, token] = authorization.split(' ');

    verify(token, process.env.TOKEN_SECRET);

    return next();
  } catch (erro) {
    response.status(401);

    return response.json({ Error: [erro.message] });
  }
};

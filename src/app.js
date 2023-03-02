import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';
import homeRoutes from './routes/homeRoutes';
import cepRoutes from './routes/CepRoutes';
import tokenRoutes from './routes/tokenRoutes';
import AppError from './errors/AppError';

class App {
  #server = null;

  #port = null;

  constructor(port) {
    this.#server = express();
    this.#port = port;
    this.#middlewares();
    this.#routes();
  }

  start() {
    this.#middlewares();
    this.#routes();
    this.#handleError();
    this.#server.listen(this.#port);
  }

  #middlewares() {
    this.#server.use(cors());
    this.#server.use(helmet());
    this.#server.use(express.urlencoded({ extended: true }));
    this.#server.use(express.json());
  }

  #routes() {
    this.#server.use('/', homeRoutes);
    this.#server.use('/cep', cepRoutes);
    this.#server.use('/token', tokenRoutes);
  }

  #handleError() {
    // eslint-disable-next-line no-unused-vars
    this.#server.use((error, request, response, next) => {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message,
        });
      }
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    });
  }
}

export default App;

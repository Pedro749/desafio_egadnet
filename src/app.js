import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import homeRoutes from './routes/homeRoutes';
import cepRoutes from './routes/cepRoutes';
import tokenRoutes from './routes/tokenRoutes';

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
}

export default App;

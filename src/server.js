import App from './app';
import appConfig from './config/appConfig';

const server = new App(appConfig.port);
server.start();

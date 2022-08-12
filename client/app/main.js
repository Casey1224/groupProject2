import { AuthController } from './Controllers/AuthController.js'
import { ThreadsController } from './Controllers/ThreadsController.js';


class App {
  authController = new AuthController();

  threadsController = new ThreadsController()
}

// @ts-ignore
window.app = new App()

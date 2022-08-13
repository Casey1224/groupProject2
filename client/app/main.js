import { AuthController } from './Controllers/AuthController.js'
import { CommentController } from './Controllers/CommentController.js';
import { ThreadsController } from './Controllers/ThreadsController.js';


class App {
  authController = new AuthController();

  threadsController = new ThreadsController()

  commentController = new CommentController()
}

// @ts-ignore
window.app = new App()

import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";

export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)

    }

    async create(req, res, next) {
        try {
            let commentData = req.body
            // commentData. TODO
            let newComment = await commentsService.create(commentData)
            res.send(commentData)
        } catch (error) {
            next(error)
        }
    }
}
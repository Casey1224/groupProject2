import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";

export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            .get('',this.getCommentsById)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)

    }

    async create(req, res, next) {
        try {
            let commentData = req.body
            commentData.userId = req.userInfo.id
            let newComment = await commentsService.create(commentData)
            res.send(newComment)
        } catch (error) {
            next(error)
        }
    }

    async getCommentsById(req, res, next) {
        try {
            const comment = await commentsService.getCommentsById(req.params.id)
            return res.send(comment)
        } catch (error) {
            next(error)
        }
    }
}
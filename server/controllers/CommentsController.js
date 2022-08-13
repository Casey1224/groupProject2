import { Auth0Provider } from "@bcwdev/auth0provider";
import { commentsService } from "../services/CommentsService";
import BaseController from "../utils/BaseController";
import { logger } from "../utils/Logger.js";

export class CommentsController extends BaseController {
    constructor() {
        super('/api/comments')
        this.router
            .get('', this.getComments)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .delete('/:id', this.remove)

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
    async remove(req, res, next) {
        try {
            const commentId = req.params.id

            await commentsService.remove(commentId)
            return res.send("This comment has been deleted")
        } catch (error) {
            logger.log(error)
            next(error)

        }
    }

    async getComments(req, res, next) {
        try {
            let comments = await commentsService.getComments()
            res.send(comments)
        } catch (error) {
            next(error)
        }
    }

}
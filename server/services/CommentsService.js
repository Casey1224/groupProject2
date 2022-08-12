import { dbContext } from "../db/DbContext"
import { threadsService } from "./ThreadsService.js"






class CommentsService {
    async getThreadCommentsById(threadId) {
        const comments = await dbContext.Comments.find({ threadId }).populate('user', 'name picture')

        return comments
    }
    async create(commentData) {
        // await threadsService.getById(commentData.threadId) Don't need to go grab threads
        let threadComment = await dbContext.Comments.create(commentData)
        await threadComment.populate('user', 'name picture')
        return threadComment
    }

    async getCommentById(commentId) {
        let comment = await dbContext.Comments.findById(commentId)
        if (!comment) {
            throw new Error("Invalid id")
        }
        return comment
    }

    async remove(commentId) {
        const comment = await this.getCommentById(commentId)


        await comment.remove()
        return comment
    }

}


export const commentsService = new CommentsService()
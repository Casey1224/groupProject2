import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"





class CommentsService {
    async getCommentsById(threadId) {
        const comments = await dbContext.Comments.find({ threadId }).populate('user', 'name picture')

        return comments
    }
    async create(commentData) {
        // await threadsService.getById(commentData.threadId) Don't need to go grab threads
        let threadComment = await dbContext.Comments.create(commentData)
        await threadComment.populate('user', 'name picture')
        return threadComment
    }
}




export const commentsService = new CommentsService()
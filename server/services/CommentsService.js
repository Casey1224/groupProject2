import { dbContext } from "../db/DbContext"
import { threadsService } from "./ThreadsService"
import {BadRequest, Forbidden} from "../utils/Errors"





class CommentsService{
    async getCommentsById(id) {
        const comment = await dbContext.Comments.findById(id).populate('user', 'name picture')
        if(!comment){throw new BadRequest}
        return comment
    }
    async create(commentData) {
        // await threadsService.getById(commentData.threadId) Don't need to go grab threads
        let threadComment = await dbContext.Comments.create(commentData)
        await threadComment.populate('user','name picture')
        return threadComment
    }
}




export const commentsService = new CommentsService()
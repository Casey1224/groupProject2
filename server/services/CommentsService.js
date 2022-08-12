import { dbContext } from "../db/DbContext"
import {threadsService} from "./ThreadsService"





class CommentsService{
    async create(commentData) {
        await threadsService.getById(commentData.threadId)
        let threadComment = await dbContext.Comments.create(commentData)
        return threadComment
    }
}




export const commentsService = new CommentsService()
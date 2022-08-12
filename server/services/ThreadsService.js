import { ThreadsController } from '../controllers/ThreadsController'
import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class ThreadsService {
    
    async getById(id) {
        const thread = await dbContext.Threads.findById(id).populate('creatorInfo')
        if (!thread) {
            throw new BadRequest("Invalid Thread ID")
        }
        return thread
    }
    async remove(threadId) {
        const thread = await this.getById(threadId)
        // if(thread.creatorId.toString() !== userId) {
            // throw new Forbidden("Don't have proper documentation")
        
        await thread.remove()
        return thread

    }
    async create(body) {
        let thread = await dbContext.Threads.create(body)
        await thread.populate('creatorInfo')
        return thread
    }

    async getAll(query = {}) {
        return await dbContext.Threads.find(query)
    }

}

export const threadsService = new ThreadsService()
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { logger } from '../utils/Logger'
import { threadsService } from '../services/ThreadsService'

export class ThreadsController extends BaseController {
    constructor(){
        super('api/threads')
        this.router 
            .get('', this.getAll)
            .get('/:id', this.getById)
            // .use(Auth0Provider.getAuthorizedUserInfo)
            // .get('/:id/comments', this.getCommentsOnThread)
            .post('', this.create)
            .delete('/:id', this.remove)

            

    }
    async getAll(req, res, next) {
        try {
            const query = req.query
            const threads = await threadsService.getAll(query)
            return res.send(threads)
        } catch (error) {
            logger.log(error)
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            // req.body.creatorId = req.userInfo.id
            const thread = await threadsService.create(req.body)
            res.send(thread)
        } catch (error) {
            logger.log(error)
            next(error)
            
        }
    }
    async remove(req, res, next) {
        try {
            const threadId = req.params.id
            // const userId = req.userInfo.id
            await threadsService.remove(threadId)//will need userID
            return res.send("This thread has been deleted")
        } catch (error) {
            logger.log(error)
            next(error)
            
        }
    }


    
    getById(arg0, getById) {
        
    }    

}
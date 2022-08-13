import { ProxyState } from "../AppState.js";
import { commentService } from "../Services/CommentService.js"
import { Pop } from "../Utils/Pop.js";

function _drawComments() { 

}

export class CommentController{
    constructor() {
        console.log('comment controller loaded');
        ProxyState.on('comments', _drawComments)
    }

    async createComment() {
        try {
            event.preventDefault()
            const form = event.target
            
        } catch (error) {
            
        }
    }
}
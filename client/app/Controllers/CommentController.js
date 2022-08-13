import { ProxyState } from "../AppState.js";
import { commentService } from "../Services/CommentService.js"
import { Pop } from "../Utils/Pop.js";

function _drawComments() {

}

export class CommentController {
    constructor() {
        console.log('comment controller loaded');


    }

    async createComment(threadId) {
        window.event.preventDefault()
        let form = window.event.target
        let newComment = {
            text: form.text.value
        }
        console.log(newComment)
        commentService.createComment(newComment)
    }


}
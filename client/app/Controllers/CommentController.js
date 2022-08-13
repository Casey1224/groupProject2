import { ProxyState } from "../AppState.js";
import { commentService } from "../Services/CommentService.js"
import { Pop } from "../Utils/Pop.js";

function _drawComments() {
    let template = ''
    ProxyState.comments.forEach(c => template += c.commentTemplate)
    console.log('what is the template?', template);
    // @ts-ignore
    const elem = document.getElementById('comments')
    if (!elem) {
        throw new Error('Invalid ID')
    }
    console.log('what is the elem', elem)
    elem.innerHTML = template

}


export class CommentController {
    constructor() {
        console.log('comment controller loaded');
        // ProxyState.on('comments', _drawComments)
        this.getComments()


    }

    async createComment(commentId) {
        window.event.preventDefault()
        let form = window.event.target
        let newComment = {
            text: form.text.value
        }
        console.log(newComment)
        commentService.createComment(newComment)
    }
    async getComments() {
        try {
            await commentService.getComments()
        } catch (error) {
            console.error('[Getting Comments]', error);
            Pop.error(error)

        }
    }

}
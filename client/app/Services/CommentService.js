import { ProxyState } from "../AppState.js"
import { Comment } from "../Models/Comment.js";

class CommentService{

    createComment(newComment) {
        ProxyState.comments = [...ProxyState.comments, new Comment(newComment)]
    }

}



export const commentService = new CommentService()
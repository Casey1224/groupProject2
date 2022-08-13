import { ProxyState } from "../AppState.js"
import { Comment } from "../Models/Comment.js";
import { api } from "./AxiosService.js";

class CommentService {

    createComment(newComment) {
        ProxyState.comments = [...ProxyState.comments, new Comment(newComment)]
    }


    async getComments() {
        let res = await api.get('/api/comments')
        console.log(res.data);
        ProxyState.comments = res.data.map(c => new Comment(c))
    }

}



export const commentService = new CommentService()
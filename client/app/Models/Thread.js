import { ProxyState } from "../AppState.js"



export class Thread {
    constructor(data) {
        this.img = data.img
        this.description = data.description
        this.id = data.id
    }




    get ThreadTemplate() {
        return `
        <div class="col-md-5 p-2 text-center bg-white m-1 border-2"> <img class="threadImg"
            src="${this.img}"
            alt=""> <p>${this.description}</p><button class="btn rounded bg-secondary" onclick="app.threadsController.delete('${this.id}')">Delete</button>

            <div class="row">
                
            </div>
         </div>
        `
    }

    get Comments() {
        let template = ''
        let comments = ProxyState.comments.filter(c => c.threadId == this.id)
        comments.forEach(c => template += c.Template)
        if (template) {
            return template
        }
        
}

}


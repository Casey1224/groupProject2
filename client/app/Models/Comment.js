import { ProxyState } from "../AppState.js"
export class Comment {
    constructor(data) {
        this.id = data.id
        this.threadId = data.threadId
        this.text = data.text
    }

    get commentTemplate() {
        return `
        <div class="col-12 shadow m-2">
        <div>${this.text}</div>
        
        </div>
        `
    }



}
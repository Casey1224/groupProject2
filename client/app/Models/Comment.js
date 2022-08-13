export class Comment{
    constructor(data) {
        this.id = data.id
        this.threadId = data.threadId
        this.text = data.text
}

    get Template() {
        return `
        
        <div>${this.text}</div>

        `
    }
    


}
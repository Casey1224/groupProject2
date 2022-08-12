


export class Thread {
    constructor(data) {
        this.img = data.img
        this.description = data.description
    }




    get ThreadTemplate() {
        return `
        <div class="col-md-5 p-2 text-center bg-white m-1 border-2"> <img class="threadImg"
            src="${this.img}"
            alt=""> <p>${this.description}</p>

            <div class="row">
                <p>Found it___ Didn't find____</p>
            </div>
            <div class="row">
                <p>Found it___ Didn't find____</p>
            </div>
            <div class="row">
                <p>Found it___ Didn't find____</p>
            </div>
         </div>
        `
    }

}


import { ProxyState } from "../AppState.js";
import { threadsService } from "../Services/ThreadsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawThreads() {
    let template = ''
    ProxyState.threads.forEach(t => template += t.ThreadTemplate)
    // @ts-ignore
    document.getElementById('threads').innerHTML = template

}


export class ThreadsController {

    constructor() {


        ProxyState.on('threads', _drawThreads)
        this.getThreads()

        console.log('Controller is working', this.getThreads);
    }

    async getThreads() {
        try {
            await threadsService.getThreads()
        } catch (error) {
            console.error('[Getting Threads]', error);
            Pop.error(error)

        }
    }

    async createThread() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            let form = window.event.target
            let newThread = {
                img: form.img.value,
                description: form.description.value

            }
            await threadsService.createThread(newThread)
            form.reset()

        } catch (error) {
            console.error('[Creating Thread]', error);
            Pop.error(error)
        }
    }

}
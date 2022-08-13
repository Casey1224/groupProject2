import { ProxyState } from "../AppState.js";
import { threadsService } from "../Services/ThreadsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawThreads() {
    let template = ''
    ProxyState.threads.forEach(t => template += t.ThreadTemplate)
    console.log('what is the template?', template);
    // @ts-ignore
    const elem = document.getElementById('threads')
    if (!elem) {
        throw new Error('Invalid ID')
    }
    console.log('what is the elem', elem)
    elem.innerHTML = template

}


export class ThreadsController {

    constructor() {


        ProxyState.on('threads', _drawThreads)
        this.getThreads()

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

    async delete(threadId) {
        try {
            await threadsService.deleteThread(threadId)
        } catch (error) {
            console.error('Delete Thread', error)
            Pop.error(error)
        }
    }

}
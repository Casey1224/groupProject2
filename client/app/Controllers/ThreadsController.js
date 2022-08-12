import { ProxyState } from "../AppState.js";

function _drawThreads() {
    let template = ''
    ProxyState.threads.forEach(t => template += t.ThreadTemplate)
    // @ts-ignore
    document.getElementById('threads').innerHTML = template
    console.log('Template', template)
}
_drawThreads()

export class ThreadsController {
    constructor() {
        ProxyState.on('threads', _drawThreads)

    }
}
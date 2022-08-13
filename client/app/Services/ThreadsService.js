import { ProxyState } from "../AppState.js"
import { Thread } from "../Models/Thread.js"
import { api } from "./AxiosService.js"



class ThreadsService {
    async deleteThread(threadId) {
        let url = `api/threads/${threadId}`
        await api.delete(url)
        ProxyState.threads= ProxyState.threads.filter(t => t.id !=threadId)
    }
    async createThread(newThread) {
        let res = await api.post('/api/threads', newThread)
        let thread = new Thread(res.data)
        ProxyState.threads = [...ProxyState.threads, thread]

    }

    async getThreads() {
        let res = await api.get('/api/threads')


        ProxyState.threads = res.data.map(t => new Thread(t))

    }




}



export const threadsService = new ThreadsService()
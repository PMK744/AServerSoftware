import { Server as IServer, Options } from 'bedrock-protocol'
import { EventEmitter } from 'events'
import { 
    AbstractHandler,
    handlers,
 } from './handlers'

const testOptions: Options = {
    host: "127.0.0.1",
    port: 19132,
}

class Server extends EventEmitter {
    public readonly IServer: IServer
    public readonly handlers: Map<string, AbstractHandler>

    public constructor() {
        super()
        this.IServer = new IServer(testOptions)
        this.handlers = new Map<string, AbstractHandler>()

        // Init
        this.once('Opened', this.loadHandlers.bind(this))
    }

    public open(): void {
        this.IServer.listen()
        this.emit("Opened")
    }

    public close(): void {
        this.emit("Closed")
        this.IServer.close()
    }

    private loadHandlers(): void {
        for (const x of handlers) {
            const handler = new x(this)
            this.handlers.set(handler.name, handler)
        }
    }
}

export {
    Server,
}
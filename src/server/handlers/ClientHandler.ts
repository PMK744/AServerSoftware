import type { Server } from '../Server'
import type { NetworkIdentifierClient } from '../../types'
import type { Player as IPlayer } from 'bedrock-protocol'

import { AbstractHandler } from './'
import {
    NetworkIdentifier,
    Player,
} from '../../player'

class ClientHandler extends AbstractHandler {
    protected readonly server: Server
    public readonly name: string

    public constructor(server: Server) {
        super()
        this.server =  server
        this.name = 'ClientHandler'
        this.server.IServer.on('connect', this.handle.bind(this))
    }

    public handle(data: IPlayer): void {
        const netId = new NetworkIdentifier((data as any).connection as NetworkIdentifierClient, this.server)
        const player = new Player(data, netId)
        
    }
}

export {
    ClientHandler,
}

import type { Player as IPlayer } from 'bedrock-protocol'
import type { NetworkIdentifier } from './'
import type { AbstractPacket } from '../packets'
import type { Vec3 } from '../types'

import {
    AbstractHandler,
    handlers,
} from './Handlers'
import {
    ChunkRadiusUpdate,
} from '../packets'
import {
    camelToSnake,
    lowercaseFirstLetter,
} from '../utils'
import { EventEmitter } from 'events'

class Player {
    public readonly IPlayer: IPlayer
    public readonly networkIdentifier: NetworkIdentifier
    public readonly handlers: Map<string, AbstractHandler>

    public chunkRadius: number
    public position: Vec3
    public pitch: number
    public yaw: number

    public constructor(IPlayer: IPlayer, networkIdentifier: NetworkIdentifier) {
        this.IPlayer = IPlayer
        this.networkIdentifier = networkIdentifier
        this.handlers = new Map<string, AbstractHandler>()

        this.chunkRadius = 0
        this.position = { x: 0, y: 0, z: 0 }
        this.pitch = 0
        this.yaw = 0

        //
        this.loadHandlers()
    }

    private loadHandlers(): void {
        for (const x of handlers) {
            const handler = new x(this)
            this.handlers.set(handler.name, handler)
        }
    }

    public sendPacket(packet: AbstractPacket): void {
        const compressed = packet.compress()
        const name = camelToSnake(lowercaseFirstLetter(compressed.name))
        console.log(name)
        this.IPlayer.queue(name, compressed.params)
    }

    public setChunkRadius(radius: number): void {
        const packet = new ChunkRadiusUpdate()
        packet.radius = radius
        this.sendPacket(packet)
    }
}

export {
    Player,
}

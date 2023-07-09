import type { Player } from '../player'
import type { IPacketData } from '../types'

import {
    AbstractPacket,
} from './'

class NetworkChunkPublisherUpdate extends AbstractPacket {
    protected readonly name: string

    public coordinates: any
	public radius: number
	public savedChunks: any[]

    public constructor(data?: IPacketData) {
        super()
        this.name = 'NetworkChunkPublisherUpdate'
        this.coordinates = data?.params.coordinates ?? { x: 0, y: 0, z: 0 }
        this.radius = data?.params.radius ?? 0
        this.savedChunks = data?.params.saved_chunks ?? []
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                coordinates: this.coordinates,
                radius: this.radius,
                saved_chunks: this.savedChunks,
            },
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    NetworkChunkPublisherUpdate,
}
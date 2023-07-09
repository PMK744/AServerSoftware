import type { Player } from '../player'
import { IPacketData } from '../types'

import { AbstractPacket } from './'

class ChunkRadiusUpdate extends AbstractPacket {
    protected readonly name: string

    public radius: number

    public constructor() {
        super()
        this.name = 'chunk_radius_update'
        this.radius = 0
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                chunk_radius: this.radius,
            },
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    ChunkRadiusUpdate,
}
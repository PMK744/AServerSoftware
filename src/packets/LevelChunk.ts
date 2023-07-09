import type { Player } from '../player'
import type { IPacketData } from '../types'

import {
    AbstractPacket,
} from './'

class LevelChunk extends AbstractPacket {
    protected readonly name: string

    public x: number
    public z: number
    public subChunkCount: number
    public cacheEnabled: boolean
    public payload: Buffer

    public constructor(data?: IPacketData) {
        super()
        this.name = 'LevelChunk'
        this.x = data?.params.x ?? 0
        this.z = data?.params.z ?? 0
        this.subChunkCount = data?.params.sub_chunk_count ?? 0
        this.cacheEnabled = data?.params.cache_enabled ?? false
        this.payload = data?.params.payload ?? undefined
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                x: this.x,
                z: this.z,
                sub_chunk_count: this.subChunkCount,
                cache_enabled: this.cacheEnabled,
                payload: this.payload,
            },
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    LevelChunk,
}
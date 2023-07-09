import type { Player } from '../player'
import type { IPacketData } from '../types'

import {
    AbstractPacket,
} from './'

class TrimData extends AbstractPacket {
    protected readonly name: string

    public patterns: any[]
    public materials: any[]

    public constructor(data?: IPacketData) {
        super()
        this.name = 'TrimData'
        this.patterns = data?.params.patterns ?? []
        this.materials = data?.params.materials ?? []
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                patterns: this.patterns,
                materials: this.materials,
            },
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    TrimData,
}
import type { Player } from '../player'
import type { IPacketData } from '../types'

import {
    AbstractPacket,
} from '.'

class CompressedBiomeDefinition extends AbstractPacket {
    protected readonly name: string

    public data: any

    public constructor(data?: IPacketData) {
        super()
        this.name = 'CompressedBiomeDefinition'
        this.data = data?.params.data ?? []
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: this.data,
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    CompressedBiomeDefinition,
}
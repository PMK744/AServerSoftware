import type { Player } from '../player'
import type { IPacketData } from '../types'

import {
    AbstractPacket,
} from './'

class CreativeContent extends AbstractPacket {
    protected readonly name: string

    public items: any[]

    public constructor(data?: IPacketData) {
        super()
        this.name = 'CreativeContent'
        this.items = data?.params.items ?? []
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                items: this.items,
            },
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    CreativeContent,
}
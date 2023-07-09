import type { Player } from '../player'
import type { IPacketData } from '../types'

import {
    AbstractPacket,
} from './'

class PlayStatus extends AbstractPacket {
    protected readonly name: string

    public status: string

    public constructor(data?: IPacketData) {
        super()
        this.name = 'PlayStatus'
        this.status = data?.params.status ?? ''
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                status: this.status,
            },
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    PlayStatus,
}
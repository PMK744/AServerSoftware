import type { Player } from '../player'
import type { IPacketData } from '../types'

import {
    AbstractPacket,
} from './'

class ClientCacheStatus extends AbstractPacket {
    protected readonly name: string

    public enabled: boolean

    public constructor(data?: IPacketData) {
        super()
        this.name = 'ClientCacheStatus'
        this.enabled = data?.params.enabled ?? true
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                enabled: this.enabled,
            },
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    ClientCacheStatus,
}
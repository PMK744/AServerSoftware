import type { Player } from '../player'
import type { IPacketData } from '../types'

import {
    AbstractPacket,
} from './'

class AvailableEntityIdentifiers extends AbstractPacket {
    protected readonly name: string

    public value: any

    public constructor(data?: IPacketData) {
        super()
        this.name = 'AvailableEntityIdentifiers'
        this.value = data?.params.value ?? {}
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                value: this.value,
            },
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    AvailableEntityIdentifiers,
}
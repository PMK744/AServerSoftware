import type { Player } from '../player'
import type { IPacketData } from '../types'

import {
    AbstractPacket,
} from './'

class ClientToServerHandshake extends AbstractPacket {
    protected readonly name: string

    public constructor() {
        super()
        this.name = 'ClientToServerHandshake'
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {},
        }
    }

    public handle(player: Player): void {
        // TODO
    }
}

export {
    ClientToServerHandshake,
}
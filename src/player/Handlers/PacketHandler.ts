import type { Player } from '../Player'
import type { IPacket } from '../../types'

import { AbstractHandler } from '.'
import { packets } from '../../packets'
import {
    snakeToCamel,
    capitalizeFirstLetter,
} from '../../utils'

class PacketHandler extends AbstractHandler {
    protected readonly player: Player
    public readonly name: string

    public constructor(player: Player) {
        super()
        this.player = player
        this.name = 'PacketHandler'
        this.player.IPlayer.on('packet', this.handle.bind(this) as any)
    }

    public handle(ipacket: IPacket): void {
        const packetId = capitalizeFirstLetter(snakeToCamel(ipacket.data.name))
        const packetRaw = packets.find((x) => x.name == packetId)
        if (!packetRaw) return console.log(`Recieved unknown packet ${packetId}`)
        let cancel = false
        const packet = new packetRaw(ipacket.data)
        // Emit Packet Event
        this.player.networkIdentifier.server.emit('Packet', {
            type: 'incoming',
            packet: packet,
            player: this.player,
            cancel: () => {
                cancel = true
            }
        })
        // Event Packet Specific Event
        this.player.networkIdentifier.server.emit(packetId, {
            packet: packet,
            player: this.player,
            cancel: () => {
                cancel = true
            }
        })
        if (cancel) return

        // Handle Packet
        packet.handle(this.player)
    }
}

export {
    PacketHandler,
}
